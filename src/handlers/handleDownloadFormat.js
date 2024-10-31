import { sendGAEvent } from '@next/third-parties/google';
import { useOnDownload } from "hooks/useOnDownload";

export  const handleDownloadFormat = (id) => {
  sendGAEvent('event', 'buttonDownloadClicked', { value: id });
    switch (id) {
      case 1:
        useOnDownload("/pre/shooting_list_guide.docx", "formatoShootingListCinemanite.docx");
        break;
      case 2:
        useOnDownload("/pre/plan_rodaje-guide.xlsx", "formatoPlanRodajeCinemanite.xlsx");
        break;
      case 3:
        useOnDownload("/pre/Script-guide.docx", "formatoScriptCinemanite.docx");
        break;
      default:
        break;
    }
  }