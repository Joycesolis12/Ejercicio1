export class PaginaWeb{
    constructor(public nombre:string, public URL:string , public direccion:String){}

}
export class ListaPaginawed {
    private static instance: ListaPaginawed;
    private listapaginaweb: PaginaWeb[]=[];
    
    private constructor (){}
    public static getInstance():ListaPaginawed{
        if(!ListaPaginawed.instance){
            ListaPaginawed.instance=new ListaPaginawed();
        }
        return ListaPaginawed.instance;
    }
    public agregarpaginas(PaginaWeb:PaginaWeb): void{
        this.listapaginaweb.push(PaginaWeb);
    }
    public mostrarpaginas():void{
        console.log("Lista de las paginas Web:");
        for(const PaginaWeb of this.listapaginaweb){
            console.log (`Nombre: ${PaginaWeb.nombre}, URL: ${PaginaWeb.URL}, direccion: ${PaginaWeb.direccion}`);

        }
    }
}


