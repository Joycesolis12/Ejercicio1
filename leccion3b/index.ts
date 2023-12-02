import { PaginaWeb } from "./paginaweb";
import { ListaPaginawed } from "./paginaweb";

const PaginaWeb1=new PaginaWeb("lafloreria.ec","https://lafloreria.ec/","Madrid");
const PaginaWeb2 = new PaginaWeb ("Heist","https://www.shopheist.com/", "Europa");
const PaginaWeb3 =new PaginaWeb("Gitman","https://www.gitman.com/", "Europa");

// instancias del objeto con el diñeño singleton
const listapaginaweb=ListaPaginawed.getInstance();

//Agregar oBJETOS A LA LISTA DE PAGINASS
listapaginaweb.agregarpaginas(PaginaWeb1);
listapaginaweb.agregarpaginas(PaginaWeb2);
listapaginaweb.agregarpaginas(PaginaWeb3);

// vamos a mostar datos por la consolaa:)
listapaginaweb.mostrarpaginas();