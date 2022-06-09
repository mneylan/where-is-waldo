class Player < ApplicationRecord
  validates :name, presence: true
  validates :name, length: { in: 2..24 }
end
