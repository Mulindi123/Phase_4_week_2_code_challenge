from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin


db =SQLAlchemy()

class Restaurant(db.Model, SerializerMixin):
    __tablename__ = "restaurants"

    serialize_rules = ("-pizzas.restaurants",)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    address = db.Column(db.String)

    #relationship
    pizzas = db.relationship('Pizza', secondary='restaurant_pizzas', back_populates='restaurants')

    def __repr__(self):
        return f"Restaurant: {self.name}, address {self.address}"
    
class Pizza(db.Model, SerializerMixin):
    __tablename__ = "pizzas"

    serialize_rules = ("-restaurants.pizzas",)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    ingredients = db.Column(db.String, nullable=False)

    #relationship
    restaurants = db.relationship('Resaurant', secondary='restaurant_pizzas', back_populates='pizzas')

    def __repr__(self):
        return f"Pizza: {self.name}, ingredients {self.ingredients}"

class RestaurantPizza(db.Model, SerializerMixin):
    __tablename__ = "restaurant_pizzas"

    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Integer, nullable=False)
    pizza_id = db.Column(db.Integer, db.ForeignKey("pizzas.id"))   #relationship
    restaurant_id = db.Column(db.Integer, db.ForeignKey("restaurants.id")) #relationship

    def __repr__(self):
        return f"Pizza_price: {self.price}"