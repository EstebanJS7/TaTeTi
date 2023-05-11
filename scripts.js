var jugador1 = '';
var jugador2 = '';
var turno = '';
var tablero = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function iniciarJuego() {
    jugador1 = document.getElementById('player1').value;
    jugador2 = document.getElementById('player2').value;
  
    if (jugador1 === '' || jugador2 === '') {
      alert('Por favor, ingresa los nombres de los jugadores.');
      return;
    }
  
    turno = 'X';
    document.getElementById('board').style.display = 'table'; // Mostrar la tabla
  
    limpiarTablero();
  }
  

function marcarCasilla(fila, columna) {
  if (tablero[fila][columna] === '') {
    tablero[fila][columna] = turno;
    document.getElementById('board').rows[fila].cells[columna].textContent = turno;

    if (hayGanador()) {
      alert('¡Ha ganado el jugador ' + turno + '!');
      limpiarTablero();
      return;
    }

    if (hayEmpate()) {
      alert('¡El juego ha terminado en empate!');
      limpiarTablero();
      return;
    }

    turno = (turno === 'X') ? 'O' : 'X';
  }
}

function hayGanador() {
  // Comprobar filas
  for (var fila = 0; fila < 3; fila++) {
    if (
      tablero[fila][0] === turno &&
      tablero[fila][1] === turno &&
      tablero[fila][2] === turno
    ) {
      return true;
    }
  }

  // Comprobar columnas
  for (var columna = 0; columna < 3; columna++) {
    if (
      tablero[0][columna] === turno &&
      tablero[1][columna] === turno &&
      tablero[2][columna] === turno
    ) {
      return true;
    }
  }

  // Comprobar diagonales
  if (
    (tablero[0][0] === turno && tablero[1][1] === turno && tablero[2][2] === turno) ||
    (tablero[0][2] === turno && tablero[1][1] === turno && tablero[2][0] === turno)
  ) {
    return true;
  }

  return false;
}

function hayEmpate() {
  for (var fila = 0; fila < 3; fila++) {
    for (var columna = 0; columna < 3; columna++) {
      if (tablero[fila][columna] === '') {
        return false;
      }
    }
  }
  return true;
}

function limpiarTablero() {
  for (var fila = 0; fila < 3; fila++) {
    for (var columna = 0; columna < 3; columna++) {
      tablero[fila][columna] = '';
      document.getElementById('board').rows[fila].cells[columna].textContent = '';
    }
  }
}
