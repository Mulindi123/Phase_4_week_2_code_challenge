from flask import Flask, make_response, jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource

from models import db, Restaurant

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

if __name__ == "__main__":
    app.run(port=5555, debug=True)
