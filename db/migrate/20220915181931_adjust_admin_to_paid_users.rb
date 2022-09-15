class AdjustAdminToPaidUsers < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :admin, :paid_users
  end
end
