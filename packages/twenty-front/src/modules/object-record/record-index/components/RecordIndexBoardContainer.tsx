import { RecordBoard } from '@/object-record/record-board/components/RecordBoard';

type RecordIndexBoardContainerProps = {
  recordBoardId: string;
  viewBarId: string;
  objectNamePlural: string;
  createRecord: () => Promise<void>;
};

export const RecordIndexBoardContainer = ({
  recordBoardId,
}: RecordIndexBoardContainerProps) => {
  return <RecordBoard recordBoardId={recordBoardId}></RecordBoard>;
};
