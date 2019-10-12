class TicTacToe {		
    constructor() {
		this.currentPlayerSymbol='x';
		this.winner=null;
		this.finish=false;
		this.turn=0;
		this.FieldValue=new Array(3)
		for(var i=0;i<this.FieldValue.length;i++){
			this.FieldValue[i]=new Array(3);
		}
		
		this.FieldValue[0][0]=null;
		this.FieldValue[0][1]=null;
		this.FieldValue[0][2]=null;
		
		this.FieldValue[1][0]=null;
		this.FieldValue[1][1]=null;
		this.FieldValue[1][2]=null;
		
		this.FieldValue[2][0]=null;
		this.FieldValue[2][1]=null;
		this.FieldValue[2][2]=null;
    }

    getCurrentPlayerSymbol() {
		return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
		if(this.FieldValue[rowIndex][columnIndex]==null){
			this.FieldValue[rowIndex][columnIndex]=this.currentPlayerSymbol;
			this.turn=this.turn+1;
			if(this.turn==9){
				this.finish=true;
			}

			if((this.FieldValue[0][0])==(this.currentPlayerSymbol)&&(this.FieldValue[1][1])==(this.currentPlayerSymbol)&&(this.FieldValue[2][2])==(this.currentPlayerSymbol)){
				this.winner=this.currentPlayerSymbol;
				this.finish=true;
			}
			else if((this.FieldValue[2][0])==(this.currentPlayerSymbol)&&(this.FieldValue[1][1])==(this.currentPlayerSymbol)&&(this.FieldValue[0][2])==(this.currentPlayerSymbol)){
				this.winner=this.currentPlayerSymbol;
				this.finish=true;
			}
			else if((this.FieldValue[0][0])==(this.currentPlayerSymbol)&&(this.FieldValue[1][0])==(this.currentPlayerSymbol)&&(this.FieldValue[2][0])==(this.currentPlayerSymbol)){
				this.winner=this.currentPlayerSymbol;
				this.finish=true;
			}
			else if((this.FieldValue[0][1])==(this.currentPlayerSymbol)&&(this.FieldValue[1][1])==(this.currentPlayerSymbol)&&(this.FieldValue[2][1])==(this.currentPlayerSymbol)){
				this.winner=this.currentPlayerSymbol;
				this.finish=true;
			}
			else if((this.FieldValue[0][2])==(this.currentPlayerSymbol)&&(this.FieldValue[1][2])==(this.currentPlayerSymbol)&&(this.FieldValue[2][2])==(this.currentPlayerSymbol)){
				this.winner=this.currentPlayerSymbol;
				this.finish=true;
			}
			else if((this.FieldValue[0][0])==(this.currentPlayerSymbol)&&(this.FieldValue[0][1])==(this.currentPlayerSymbol)&&(this.FieldValue[0][2])==(this.currentPlayerSymbol)){
				this.winner=this.currentPlayerSymbol;
				this.finish=true;
			}
			else if((this.FieldValue[1][0])==(this.currentPlayerSymbol)&&(this.FieldValue[1][1])==(this.currentPlayerSymbol)&&(this.FieldValue[1][2])==(this.currentPlayerSymbol)){
				this.winner=this.currentPlayerSymbol;
				this.finish=true;
			}
			else if((this.FieldValue[2][0])==(this.currentPlayerSymbol)&&(this.FieldValue[2][1])==(this.currentPlayerSymbol)&&(this.FieldValue[2][2])==(this.currentPlayerSymbol)){
				this.winner=this.currentPlayerSymbol;
				this.finish=true;
			}

			if(this.currentPlayerSymbol=='x'){
				this.currentPlayerSymbol='o';
			}
			else{
				this.currentPlayerSymbol='x';
			}
		}
    }

    isFinished() {
		return this.finish;
    }

    getWinner() {
		return this.winner;
    }

    noMoreTurns() {
		if(this.turn!=9){
			return false;
		}
		else{
			return true;
		}
    }

    isDraw() {
		if(this.turn==9&&this.winner==null){
			return true;
		}
		else {
			return false;
		}
    }

    getFieldValue(rowIndex, colIndex) {
		return this.FieldValue[rowIndex][colIndex];	
    }
}

module.exports = TicTacToe;
