import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import * as FileSystem from "expo-file-system";

const quality: number = 0.1;
const aspect: [number, number] = [4, 3];
const MAX_SIZE_MB = 5; // Limite de tamanho de imagem em MB

// Função para verificar o tamanho do arquivo
const checkFileSize = async (uri: string): Promise<boolean> => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(uri);
    // Se o arquivo não existir ou o tamanho for 0, retorna false
    return fileInfo.exists && fileInfo.size
      ? fileInfo.size / (1024 * 1024) <= MAX_SIZE_MB
      : false;
  } catch (error) {
    console.error("Erro ao obter informações do arquivo:", error);
    return false;
  }
};

// --------------------------------------------------
// Função para exibir o alerta de seleção de imagem
export const showAddPhotoAlert = (
  handleCamera: () => void,
  handleGallery: () => void,
  maxPhotos: number = 30,
  photosAdded: number = 0
) => {
  Alert.alert(
    "Selecionar Imagem",
    `Deve ter no máximo ${maxPhotos} imagens. Existem ${photosAdded} imagens já adicionadas.`,
    [
      { text: "Cancelar", style: "cancel" },
      { text: "Câmera", onPress: handleCamera },
      { text: "Galeria", onPress: handleGallery },
    ]
  );
};

// --------------------------------------------------
// Função para tirar uma foto com a câmera
export const takePhotoWithCamera = async (
  setPhotos: React.Dispatch<React.SetStateAction<string[]>>,
  maxPhotos: number = 2,
  startLoading?: () => void,
  stopLoading?: () => void
) => {
  if (startLoading) startLoading();
  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    aspect,
    quality,
  });

  if (!result.canceled && result.assets) {
    const newPhoto = result.assets[0].uri;

    // Verificar tamanho da imagem
    const isValidSize = await checkFileSize(newPhoto);
    if (!isValidSize) {
      Alert.alert("Erro", "A imagem selecionada excede o limite de 5 MB.");
      if (stopLoading) stopLoading();
      return;
    }

    setPhotos((prevPhotos) => {
      if (maxPhotos === 1) {
        // Substitui a única foto existente
        return [newPhoto];
      }
      return [...prevPhotos, newPhoto];
    });
  }
  if (stopLoading) stopLoading();
};

// --------------------------------------------------
// Função para selecionar imagens da galeria
export const pickImageFromLibrary = async (
  setPhotos: React.Dispatch<React.SetStateAction<string[]>>,
  maxPhotos: number = 2,
  startLoading?: () => void,
  stopLoading?: () => void
) => {
  if (startLoading) startLoading();
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsMultipleSelection: maxPhotos > 1,
    aspect,
    quality,
  });

  if (!result.canceled && result.assets) {
    const validPhotos: string[] = [];

    for (let i = 0; i < result.assets.length; i++) {
      const photoUri = result.assets[i].uri;
      const isValidSize = await checkFileSize(photoUri);

      if (isValidSize) {
        validPhotos.push(photoUri);
      } else {
        Alert.alert("Erro", "Uma ou mais imagens excedem o limite de 5 MB.");
      }
    }

    setPhotos((prevPhotos) => {
      if (maxPhotos === 1) {
        // Substitui a única foto existente
        return [validPhotos[0]];
      }
      return [...prevPhotos, ...validPhotos];
    });
  }

  if (stopLoading) stopLoading();
};

// --------------------------------------------------
// Função para confirmar a exclusão de uma imagem
export const handleDeletePhoto = (
  uri: string,
  setPhotos: React.Dispatch<React.SetStateAction<string[]>>
) => {
  Alert.alert(
    "Confirmar Exclusão",
    "Tem certeza de que deseja excluir esta imagem?",
    [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Excluir",
        onPress: () =>
          setPhotos((prevPhotos) =>
            prevPhotos.filter((photo) => photo !== uri)
          ),
      },
    ]
  );
};
