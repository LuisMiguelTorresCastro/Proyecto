export interface Agencia {
    idAge: number;
    nomAge: string;
    TipAge: string;
    telAge: string;
    emaAge: string;
    desAge?: string;
    dir: string;
    localidad_id: number; // Relación con Localidad
}
