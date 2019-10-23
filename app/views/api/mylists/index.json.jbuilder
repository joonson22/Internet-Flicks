@mylists.each do |mylist|
    json.set! mylist.id do
        json.extract! mylist, :id, :user_id, :movie_id
    end
end