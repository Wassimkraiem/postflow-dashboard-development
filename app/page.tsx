import PostflowApp from "@/components/postflow-app"
import { Toaster } from "sonner"

export default function Page() {
  return <><PostflowApp /><Toaster position="bottom-right" richColors closeButton /></>
}
