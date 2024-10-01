function Validation (value){
    let errors = {}
    if(value.nom ===""){
        errors.nom = "Le nom est requis "
    }
    else if(value.prenom=== ""){
        errors.prenom = "Le prenom est requis "
    }else{
        errors.nom=""
    }
    if(value.prenom=== ""){
        errors.prenom = "Le prenom est requis "
    }else {
        errors.prenom=""
    }
    if(value.tel=== ""){
        errors.tel = "Le Numero de telephone est requis "
    }else {
        errors.tel=""
    }
    if(value.quartier=== ""){
        errors.quartier = "Le Non du quartier est requis "
    }else {
        errors.quartier=""
    }
    if(value.date=== ""){
        errors.date = "La date est requis "
    }else {
        errors.date=""
    }
     if(value.degre_d=== ""){
        errors.degre_d = "** Champs requis ** "
    }else {
        errors.degre_d=""
    }
    if(value.degre_g=== ""){
        errors.degre_g = "** Champs requis ** "
    }else {
     errors.degre_g=""
    }
    if(value.verre_g=== ""){
        errors.verre_g = "** Champs requis ** "
    }else {
        errors.verre_g=""
    }
    if(value.verre_d=== ""){
        errors.verre_d = "** Champs requis ** "
    }else {
        errors.verre_d=""
    }

    
    return errors;
}
export default Validation;