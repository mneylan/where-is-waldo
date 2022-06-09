class CharactersController < ApplicationController
  def index
    @characters = {:characters => Character.all, :time => Time.now}
    
    respond_to do |format|
      format.json { render :json => @characters}
      format.html
    end

    

  end
end
