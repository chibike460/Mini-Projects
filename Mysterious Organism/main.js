// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function that creates multiple objects for p. aequor
const pAequorFactory = (number, array) =>{
  return {
    specimenNum: number,
    dna: array,

    //This method mutates and returns the mutated specimen dna by changing a random DNA base. The original DNA is changed.
    mutate(){
      const dnaRandIndex1 = Math.floor(Math.random() * this.dna.length);
      const randBase1 = this.dna[dnaRandIndex1];
      let randBase2 = returnRandBase();
      if (randBase1 === randBase2){
        randBase2 = returnRandBase();
      }
      this.dna[dnaRandIndex1] = randBase2
      return this.dna;
    },

    /* This method compares the correlation of DNA's of two specimens, by taking into consideration, their actual base position.
    It prints a message, rather than return.*/
    compareDNA(obj){
      let occurrence = 0;
      for (let i = 0; i<(this.dna).length-1; i++){
        if (this.dna[i] === obj.dna[i]){
          occurrence+=1;
        }
      }
      let message = `Specimen #${this.specimenNum} and Specimen #${obj.specimenNum} have ${((occurrence/(obj.dna).length)*100).toFixed(1)}% DNA in common.`;
      console.log(message);  
    },

    /* This method returns true or false, depending if the the specimen in question has at least 60% of Cytosine - 'C' 
    or Cytosine, and Guanine - 'G' DNA base.*/
    willLikelySurvive(){
      let baseCount = 0;
      for (i of this.dna){
        if (i === 'C' || i === 'G'){
          baseCount+=1;
        }
      }
      return (baseCount/this.dna.length)*100 >= 60;
    }
  }
}

// Here, we declare 30 instances of this specimen that has the likelihood of survivng, and append each instance to an array.
const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

// This should reveal the instances of the various specimen that could survive.
console.log(survivingSpecimen);