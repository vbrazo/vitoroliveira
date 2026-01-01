import { Dialog, DialogContent } from '@/design-system/compositions/ui/dialog';

interface CalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  url?: string;
}

export const CalModal = ({ 
  open, 
  onOpenChange, 
  url = 'https://cal.com/vitoroliveira/30min?overlayCalendar=true' 
}: CalModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-8 bg-[#EDEEF2]">
        <iframe
          src={url}
          className="w-full h-full rounded-lg"
          style={{ border: 'none' }}
          title="Schedule a call"
          allow="camera; microphone; geolocation"
        />
      </DialogContent>
    </Dialog>
  );
};

