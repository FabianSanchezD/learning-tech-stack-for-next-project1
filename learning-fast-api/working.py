from fastapi import FastAPI, Path
from typing import Optional

app = FastAPI()

inventory = {
    1: {
        "name": "Milk",
        "price": 4,
        "brand": 'Dos Pinos'
    }
}

@app.get('/get-item/{item_id}')
def get_item(item_id: int = Path(..., description="The ID of the item you'd like to view", gt = 0, lt = 2)): #like in ts
    return inventory[item_id]

@app.get('/get-by-name/{item-id}')
def get_item(*, item_id: int, test:int , name: Optional[str] = None):
    for item_id in inventory:
        if inventory[item_id]["name"] == name:
            return inventory[item_id]
        
    return {"Data not found"}