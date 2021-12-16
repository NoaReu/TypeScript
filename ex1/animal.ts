
abstract class Animal{


    private name:string;

    public constructor(name:string){
        this.setName(name);
    }

    public setName(name:string):void{
        this.name=name;
    }

    public getName():string{
        return this.name;
    }

    public abstract eat():void;

}