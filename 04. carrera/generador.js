export default class Dado {
    lanzar() {
        let result = Math.floor(Math.random()*6 + 1);

        if(result === 3) {
          return result = 3;
        } else if(result === 1 && 2) {
          return result = 1;
        } else {
          return result = 2;
        }
    }
}