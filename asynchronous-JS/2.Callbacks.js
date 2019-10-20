//Lecture The Old Way : Asynchronous JavaScript with callbacks       
//Callback hell:
function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);
        setTimeout(id => {
            const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas' };
            console.log(`${id}: ${recipe.title}`);
            setTimeout(publisher => {
                const recipe2 = { title: 'Italian Pizza', publisher: 'Jonas' };
                console.log(recipe);
            }, 1500, recipe.publisher);
        }, 1500, recipeID[2]);
    }, 1500);
}
getRecipe();