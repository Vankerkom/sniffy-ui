export interface Message {
  id: string;
  sessionId: number;
  timestamp: Date;
  inbound: boolean;
  payload: string;
  opCode: string;
  protocol?: string;
}
