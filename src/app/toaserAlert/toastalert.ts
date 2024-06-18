import { ToastrService } from "ngx-toastr";

export class  MyToaster{

  constructor(
    private toaster : ToastrService
  ) {


  }
  success(title : string , message : string){
    this.toaster.success(message , title)
  }

  error(title : string , message : string){
    this.toaster.error(message , title)
  }

  warning(title : string , message : string){
    this.toaster.warning(message , title)
  }



}
