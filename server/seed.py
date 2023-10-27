from faker import Faker
from random import randint, choice as rc
from app import app
from models import db, Restaurant, Pizza, RestaurantPizza

fake = Faker()

with app.app_context():

    Restaurant.query.delete()
    Pizza.query.delete()
    RestaurantPizza.query.delete()

    restaurants = []
    for _ in range(5):
        restaurant = Restaurant(
            name=fake.company(),
            address = fake.address()
        )
        
        restaurants.append(restaurant)
    db.session.add_all(restaurants)




    pizzas =[]
    for a in range(10):
        pizza = Pizza(
            name = fake.word(),
            ingredients = fake.sentence()
        )

        pizzas.append(pizza)
    db.session.add_all(pizzas)
   
    restaurant = Restaurant.query.all()
    pizza = Pizza.query.all()

    restaurant_pizzas =[]
    for restaurant in restaurants:
        for _ in range(3):
            pizza = rc(pizzas)
            price = randint(1, 30)
            restaurant_pizza = RestaurantPizza(
                restaurant_id= restaurant.id,
                pizza_id =pizza.id,
                price=price
            )

            print(f"Adding restaurant_pizza: {restaurant_pizza}")
            
            restaurant_pizzas.append(restaurant_pizza)
    db.session.add_all(restaurant_pizzas)

    db.session.commit()

    try:
        db.session.commit()
    except Exception as e:
        print(f"An error occurred during commit: {e}")

    restaurant = Restaurant.query.all()
    pizza = Pizza.query.all()

   