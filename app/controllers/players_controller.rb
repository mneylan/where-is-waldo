class PlayersController < ApplicationController
  def index
    @players = Player.all

    respond_to do |format|
      format.json { render :json => @players}
      format.html
    end
  end

  def create
    @player = Player.create!(player_params)
  end

  private

  def player_params
    params.require(:player).permit(:name, :time)
    
  end
end
