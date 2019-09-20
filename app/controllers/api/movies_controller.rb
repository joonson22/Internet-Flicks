class Api::MoviesController < ApplicationController
    def index
        @movies = Movie.all
        
    end

    def show
        @movie = Movie.find(params[:id])
    end

    private
    def movie_params
        params.require(:movie).permit(:title, :genre, :body, :year, :rating)
    end
end
