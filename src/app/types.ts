export interface BotaoProps {
  text?: string;
  onPress?: () => void;
}

export type Tarefa = {
  id: string;
  titulo: string;
  concluida: boolean;
};
