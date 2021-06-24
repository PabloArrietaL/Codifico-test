import { Component, OnInit } from '@angular/core';

interface Point {
  player: string;
  disabled: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public positions: Array<Array<Point>> = [];
  public disabled: boolean = false;
  public players = {
    1: 'o',
    2: 'x'
  }
  public player: string = this.players[1];
  public winner: string = '';

  ngOnInit(): void {
    this.positions = this.initArray();
  }

  changePlayer(x: number, y: number): void {
    if (this.player === 'o') {
      this.positions[x][y] = { player: this.player, disabled: true };
      this.player = 'x';
    } else {
      this.positions[x][y] = { player: this.player, disabled: true };
      this.player = 'o';
    }
    this.verifyGame();
  }

  verifyGame(): void {
    const pos = this.positions;
    if (this.validaDifference(pos[0][0].player, pos[0][1].player) && this.validaDifference(pos[0][0].player, pos[0][2].player))
      this.closeGame(pos[0][0].player);
    else if (this.validaDifference(pos[1][0].player, pos[1][1].player) && this.validaDifference(pos[1][0].player, pos[1][2].player))
      this.closeGame(pos[1][0].player);
    else if (this.validaDifference(pos[2][0].player, pos[2][1].player) && this.validaDifference(pos[2][0].player, pos[2][2].player))
      this.closeGame(pos[2][0].player);
    else if (this.validaDifference(pos[0][0].player, pos[1][0].player) && this.validaDifference(pos[0][0].player, pos[2][0].player))
      this.closeGame(pos[0][0].player);
    else if (this.validaDifference(pos[0][1].player, pos[1][1].player) && this.validaDifference(pos[0][1].player, pos[2][1].player))
      this.closeGame(pos[0][0].player);
    else if (this.validaDifference(pos[0][2].player, pos[1][2].player) && this.validaDifference(pos[0][2].player, pos[2][2].player))
      this.closeGame(pos[0][0].player);
    else if (this.validaDifference(pos[0][0].player, pos[1][1].player) && this.validaDifference(pos[0][0].player, pos[2][2].player))
      this.closeGame(pos[0][0].player);
    else if (this.validaDifference(pos[0][2].player, pos[1][1].player) && this.validaDifference(pos[0][2].player, pos[2][0].player))
      this.closeGame(pos[0][2].player);
  }

  validaDifference(pos1: string, pos2: string): boolean {
    if ((pos1 !== '' && pos2 !== '') && (pos1 === pos2)) return true;
    return false;
  }

  closeGame(winner: string): void {
    this.winner = winner;
    this.disabled = true;
  }

  initArray(): Array<Array<Point>> {
    const point: Point = { player: '', disabled: false };
    return [[point, point, point], [point, point, point], [point, point, point]];
  }

  resetGame(): void {
    this.positions = this.initArray();
    this.disabled = false;
    this.winner = '';
  }

}
