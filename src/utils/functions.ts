import * as Application from "expo-application";
import { Platform } from "react-native";
import * as Device from "expo-device";

// ________________________________________________________________________________________________________________________________
/**
 * Limita o tamanho de uma string a um número máximo de caracteres.
 * @param {string} string A string a ser limitada.
 * @param {number} limit O número máximo de caracteres permitido.
 * @returns {string} A string limitada.
 *
 * Exemplo:
 * Entrada: "Este é um exemplo de string", 10
 * Saída: "Este é um..."
 */
const limitString = (string: string, limit: number): string => {
  if (!string) return "";
  return string.length > limit ? `${string.slice(0, limit)}...` : string;
};

// ________________________________________________________________________________________________________________________________
/**
 * Obtém um identificador único do dispositivo com base na plataforma.
 * Se não for possível obter o ID nativo, um UUID será gerado.
 * @returns {Promise<string>} O identificador único do dispositivo.
 *
 * Exemplo:
 * Saída: "ios-iPhone-123e4567-e89b-12d3-a456-426614174000"
 */
const getDeviceIdentifier = async (): Promise<string> => {
  const platform = Platform.OS;
  let identifier = "";

  if (platform === "ios") {
    identifier = (await Application.getIosIdForVendorAsync()) || "erro";
  } else if (platform === "android") {
    identifier = (await Application.getAndroidId()) || "erro";
  } else {
    identifier = "erro";
  }

  return `${platform}-${Device.modelName}-${identifier}`;
};

/**
 * Extrai o nome do arquivo a partir de uma URL.
 * Remove o prefixo "file://" (se presente) e obtém apenas o nome do arquivo.
 * @param {string} url - A URL ou caminho completo do arquivo.
 * @returns {string | null} O nome do arquivo ou `null` se não houver nome na URL.
 *
 * Exemplo:
 * Entrada: "file://caminho/para/arquivo/exemplo.txt"
 * Saída: "exemplo.txt"
 */
const extractFileName = (url: any) => {
  const filePath = url.replace("file://", "");
  const fileName = filePath.split("/").pop();
  return fileName;
};

const photoExtensions = (photoUri: string) => {
  return photoUri.split(".").pop();
};

export { limitString, getDeviceIdentifier, extractFileName, photoExtensions };
