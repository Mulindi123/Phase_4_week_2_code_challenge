from flask import Flask, make_response, jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource

from models import db, Restaurant, Pizza, RestaurantPizza

app = Flask(__name__)

#develppment configurations
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] =False
app.json.compact = False

migrate = Migrate(app, db)

api =Api(app)

db.init_app(app)

class Restaurants(Resource):
    def get(self):
        restaurants = Restaurant.query.all()

        restaurants_list = []
        for restaurant in restaurants:
            restaurant_dict = {
                "id": restaurant.id,
                "name": restaurant.name,
                "address": restaurant.address     
            }

            restaurants_list.append(restaurant_dict)

        return make_response(jsonify(restaurants_list), 200)

api.add_resource(Restaurants, "/restaurants", endpoint="restaurants")

class RestaurantByID(Resource):
    def get(self, id):

        restaurant = Restaurant.query.filter_by(id=id).first()
        if restaurant:

            restaurant_dict = restaurant.to_dict()
        
            response =  make_response(jsonify(restaurant_dict), 200)
        else:
            response =  make_response({"error": "Restaurant not found"}, 404)

        return response
    
    def delete(self,id):
        restaurant = Restaurant.query.filter_by(id=id).first()

        if restaurant:
            associated_pizzas = RestaurantPizza.query.filter_by(restaurant_id = id).all()
            for pizza in associated_pizzas:

                db.session.delete(pizza)
                db.session.commit()

            db.session.delete(restaurant)
            db.session.commit()

            return make_response({}, 204)
        
        else:
            response = make_response({"error": "Restaurant not found"}, 404)
            return response
    
api.add_resource(RestaurantByID, "/restaurants/<int:id>", endpoint="restaurants/<int:id>")

class Pizzas(Resource):
    def get(self):
        pizzas = Pizza.query.all()

        pizzas_list = []
        for pizza in pizzas:
            pizza_dict = {
                "id": pizza.id,
                "name": pizza.name,
                "ingredients": pizza.ingredients     
            }

            pizzas_list.append(pizza_dict)

        return make_response(jsonify(pizzas_list), 200)

api.add_resource(Pizzas, "/pizzas", endpoint="pizzas")

if __name__ == "__main__":
    app.run(port=5555, debug=True)
