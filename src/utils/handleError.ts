import Toast from "react-native-toast-message";

type ErrorHandlerOptions = {
  showToast?: boolean;
  login?: boolean;
};

export function handleError(
  error: unknown,
  options: ErrorHandlerOptions = { showToast: true, login: false }
): string {
  let errorMessage = "Erro de conexão";

  if (error instanceof Error) {
    const status = (error as any)?.response?.status;
    const serverMessage = (error as any)?.response?.data?.message;

    if (status === 404) {
      errorMessage = "Erro de conexão!";
    } else if (status === 401 && options.login) {
      errorMessage = "Dados de acesso incorretos!";
    } else if (serverMessage) {
      errorMessage = serverMessage;
    } else {
      errorMessage = error.message || errorMessage;
    }
  }

  console.log("🚀 Detalhes do erro:", {
    message: errorMessage,
    error: error instanceof Error ? error.stack : error,
  });

  if (options.showToast) {
    Toast.show({
      type: "error",
      text1: errorMessage,
    });
  }

  return errorMessage;
}
