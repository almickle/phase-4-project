class AddSubscribedInPlaceOfPaidUsers < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :paid_users, :subscribed
  end
end
