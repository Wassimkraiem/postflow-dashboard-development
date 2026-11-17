import PostflowApp from "@/components/postflow-app"
import { Toaster } from "sonner"

export default function DashboardLayout() {
  return <><PostflowApp /><Toaster position="bottom-right" richColors closeButton /></>
}
