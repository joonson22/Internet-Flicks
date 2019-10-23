class Api::MylistsController < ApplicationController
    def index
        @user = current_user.id
        @mylists = Mylist.all.to_a
       
        @mylists.select {|mylist| mylist.id === @user}
        
    end

    def create
        
        @mylist = Mylist.new(mylist_params)
        if @mylist.save
            render :new
        else
            render json: ["Already Saved"], status: 401
        end
    end

    def destroy 
        @mylist = Mylist.find(params[:id])
        @mylist.destroy
    end

    private

    def mylist_params
        params.require(:mylist).permit(:user_id, :movie_id)
    end


end
