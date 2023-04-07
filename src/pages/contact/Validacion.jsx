
export function Validacion (values) {
    const regExp = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    
      const errors = {};
      if (!values.name) {
        errors.name = "El nombre es requerido";
      }
  
      if (!values.lastName) {
        errors.lastName = "El apellido es requerido";
      }
    
    
      if (!values.email) {
        errors.email = "El email es requerido";
      }
    
      if((regExp.test(values.email)) === false){
        errors.email = "La direccion del email no es valida"
      }
    
      if (!values.message) {
        errors.message = "El mensaje es requerido";
      }
    
      if (values.message.length < 20) {
        errors.message = "El mensaje no puede tener menos de 20 caracteres";
      }
    
      return errors;
}