export type UnitCardProps = {
  unitCompleted: any;
  item: any;
  unit: number;
  phase: number;
  lessonTitle: string;
  unitInfo: {
    grammar: {
      grammarTitle: string;
      grammarSummary: string;
      grammarCompleted: boolean;
    };
    vocab: {
      vocabSummary: {
        word: string;
        translation: string;
      };
      vocabCompleted: boolean;
    };
    dialogue: {
      newDialogue: string;
      dialogueCompleted: boolean;
    };
  };
  lessonCompleted: boolean;
  completedDate: string;
};
