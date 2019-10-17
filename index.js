class Polygon { 
    constructor(s){ 
        this.s = s; 
    }

    get countSides(){ 
        return this.s.length 
    }

    get perimeter() { 
        let sum = 0
        for(let i = 0; i < this.s.length; i++){ 
            sum += this.s[i]
        }
        return sum; 
    }
}

class Triangle extends Polygon {
    get isValid(){ 
        if(this.s[0] + this.s[1] < this.s[2]){ 
            return false; 
        } else if(this.s[0] + this.s[2] < this.s[1]){ 
            return false; 
        } else if(this.s[1] + this.s[2] < this.s[0]){ 
            return false; 
        } else { 
            return true; 
        }
    }
}

class Square extends Polygon { 
    get isValid(){ 
        for(let i = 0; i < this.s.length; i++ ){ 
            if(this.s[i] === this.s[i + 1]){ 
                return true
            }
            else { 
                return false 
            }
        }
    }

    get area(){ 
        return this.s[0] * this.s[1]
    }
}