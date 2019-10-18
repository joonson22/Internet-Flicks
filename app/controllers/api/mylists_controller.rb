class Api::MylistsController < ApplicationController
    def show
        @mylist = Mylist.find(params[:id])
    end
end
