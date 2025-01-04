import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { proxima_logo, qr_code, starGold } from "@/assets"

interface IProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const DownloadPopup: React.FC<IProps> = (props) => {

    const { isOpen, setIsOpen } = props;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader className="flex justify-center items-center">
            <Button className="sm:w-[90%] h-[70px] my-6 bg-cyan-600">
                <img src={ proxima_logo } alt="Proxima Logo" className="w-auto h-[400px]"/>
            </Button>
          <DialogTitle className="text-3xl pb-4">DOWNLOAD THE APP FOR <span className="text-cyan-600">FREE</span></DialogTitle>
          <DialogDescription className="flex flex-row justify-between items-start">
            <div className="w-[100%] flex flex-col items-center">
                <img src={ qr_code } alt="Proxima Logo" className="w-auto h-[200px]"/>
                <div className="font-bold">Scan QR Code to Download</div>
                <div className="flex flex-row py-4">
                    <div>
                        <img src={starGold} alt="star_gold" className="w-[30px] h-[20px] object-contain" />
                    </div>
                    <div>
                        <img src={starGold} alt="star_gold" className="w-[30px] h-[20px] object-contain" />
                    </div>
                    <div>
                        <img src={starGold} alt="star_gold" className="w-[30px] h-[20px] object-contain" />
                    </div>
                    <div>
                        <img src={starGold} alt="star_gold" className="w-[30px] h-[20px] object-contain" />
                    </div>
                    <div>
                        <img src={starGold} alt="star_gold" className="w-[30px] h-[20px] object-contain" />
                    </div>
                    4.5 Stars on Apple App Store
                </div>
            </div>
            <ul className="w-[100%]">
                <li className="font-normal text-lg pb-2 text-start">Follow <span className="font-bold">100+</span> Proven Workout Programs</li>
                <li className="font-normal text-lg pb-2 text-start">Use the <span className="font-bold">AI Workout Builder</span> to easily upload your notes / spreadsheets</li>
                <li className="font-normal text-lg pb-2 text-start"><span className="font-bold">Generate</span> Workout Programs with AI</li>
                <li className="font-normal text-lg pb-2 text-start">Track your progress</li>
                <li className="font-normal text-lg pb-2 text-start"><span className="font-bold">Share</span> your Personal Records with your friends</li>
            </ul>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
