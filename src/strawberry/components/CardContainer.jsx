import React, {useState} from 'react';
import Card from "./Card";
import first from "../imgs/1.jpg"
import second from "../imgs/2.jpg"
import third from "../imgs/3.jpg"
import fourth from "../imgs/4.jpg"
import fifth from "../imgs/5.jpg"
import sixth from "../imgs/6.jpg"
import seventh from "../imgs/7.jpg"
import eighth from "../imgs/8.jpg"

const CardContainer = () => {

    const desserts = [
        {
            id : 1,
            name: 'Sourdough Pancakes with Maple-Molasses Strawberries',
            imageUrl: `${first}`,
            ingredients: ['1 cup pure maple syrup',
                '¼ cup unsulphured molasses',
                '2 tablespoons unsalted butter',
                'Pinch of kosher salt',
                '1 pint strawberries, hulled and halved',
                '1 ¼ cups all-purpose flour (about 5 ⅜ ounces)',
                '½ cup whole-wheat flour (about 2 ounces)',
                '3 tablespoons granulated sugar',
                '2 teaspoons baking powder',
                '1 ½ teaspoons kosher salt',
                '1 ¼ cups whole milk',
                '1 cup prepared sourdough starter (see Note)',
                '2 large eggs',
                '3 tablespoons unsalted butter, melted, plus more for greasing griddle'],
            instructions: ['Step 1. Cook maple syrup, molasses, butter, and salt in a large saucepan over medium, stirring occasionally, until butter is melted and mixture is warm, about 5 minutes. Remove from heat and stir in strawberries. Cover to keep warm.',
                'Step 2. Whisk together all-purpose flour, whole-wheat flour, sugar, baking powder, and salt in a large bowl. Whisk together milk, sourdough starter, eggs, and melted butter in a medium bowl. Add milk mixture to flour mixture and stir until just combined.',
                'Step 3. Preheat a large cast-iron griddle or skillet over medium-high; grease with butter and reduce heat to medium-low. Scoop a heaping ¼ cup (or scant ⅓ cup) batter per pancake onto hot griddle. Cook until sides of pancakes look set and tops are dotted with a few bubbles, 1 minute and 30 seconds to 2 minutes. Flip and cook until cooked through and brown on bottoms, 1 to 2 minutes. Remove pancakes from griddle. Wipe griddle clean. Repeat process with remaining batter, re-greasing griddle after each batch. Serve with the strawberries.']
        },
        {
            id : 2,
            name: 'Honey-Ricotta Mousse with Strawberries',
            imageUrl: `${second}`,
            ingredients: ['1 pound Homemade Fresh Ricotta or store-bought fresh ricotta, drained',
                '2 tablespoons clover honey, plus more for drizzling',
                '1 ½ teaspoons vanilla bean paste or extract',
                'Pinch of kosher salt',
                '1 cup heavy cream',
                'Toasted almond slices, sliced fresh strawberries, and fresh mint leaves, for garnish'],
            instructions: ['Step 1. Process ricotta, honey, vanilla bean paste, and salt in a food processor until very smooth, about 2 minutes, stopping to scrape down sides of bowl as needed.',
                'Step 2. Whip heavy cream in a large bowl until stiff peaks form, 1 to 2 minutes. Add ricotta mixture, and gently whisk to combine. Using a rubber spatula, fold mixture until evenly incorporated, 3 to 5 times. Divide mixture evenly among 4 glasses or bowls. Cover and refrigerate until firm and set, at least 1 hour or up to overnight.',
                'Step 3. Garnish mousse with toasted almond slices, sliced fresh strawberries, mint leaves, and a drizzle of honey. Serve immediately.']
        },
        {
            id : 3,
            name: 'Strawberry Shortcakes with Meyer Lemon Cream',
            imageUrl: `${third}`,
            ingredients: ['1 ½ cups all-purpose flour, plus more for dusting',
                '¾ cup cake flour',
                '3 tablespoons sugar',
                '2 teaspoons baking powder',
                '½ teaspoon kosher salt',
                '6 tablespoons cold unsalted butter, cubed, plus 1 ½ tablespoons melted butter',
                '1 cup heavy cream',
                '1 ½ tablespoons turbinado sugar',
                'Finely grated zest of 1 lemon, divided',
                '¼ cup fresh lemon juice, preferably from Meyer lemons',
                '2 ½ tablespoons sugar',
                '1 large egg',
                '1 large egg yolk',
                'Pinch of kosher salt',
                '3 tablespoons unsalted butter, divided',
                '1 cup heavy cream',
                '2 pints strawberries, quartered',
                '2 tablespoons sugar'],
            instructions: ['Step 1. Preheat the oven to 375°F. In a large bowl, whisk the all-purpose and cake flours with the sugar, baking powder, and salt. Using a pastry blender or two knives, cut in the cold butter until it is the size of small peas. Stir in the cream until a shaggy dough forms.',
                'Step 2. Turn the dough out onto a very lightly floured surface and knead two or three times, just until it comes together. Roll the dough into a 7-inch round, about ¾-inch thick. Using a 2 ¾-inch or 3-inch biscuit cutter, stamp out five biscuits. Gently gather the scraps and reroll them cut out one more round so you have a total of 6 biscuits.',
                'Step 3. Transfer the biscuits to a baking sheet and brush with the melted butter. Sprinkle the turbinado sugar on top and bake for 25 to 30 minutes, until the biscuits are golden. Let cool.',
                'Step 4. Set a strainer over a medium bowl. In a small saucepan, combine half of the lemon zest with the lemon juice, sugar, egg, egg yolk, salt and 1 tablespoon of the butter. Cook over moderate heat, whisking constantly, until thickened, about 5 minutes. Immediately strain the curd into the bowl. Whisk in the remaining lemon zest and 2 tablespoons of butter. Press plastic wrap directly onto the surface and refrigerate until cool, about 15 minutes.',
                'Step 5. In a medium bowl, softly whip the cream. Fold the lemon curd into the whipped cream and refrigerate for at least 15 minutes.',
                'Step 6. In a medium bowl, toss the strawberries with the sugar and let stand for 15 minutes.',
                'Step 7. Split the biscuits in half and arrange the bottom halves on plates. Mound the lemon cream on the biscuits, top with the strawberries and their juices, and replace the tops. Serve right away.']
        },
        {
            id : 4,
            name: 'Strawberry tart',
            imageUrl: `${fourth}`,
            ingredients: ['100g/3 ½oz unsalted butter, softened',
                '50g/1 ¾oz icing sugar',
                '2 free-range egg yolks',
                '200g/7oz plain flour, plus extra for dusting',
                '¼ tsp fine salt',
                '300ml/½ pint full-fat milk',
                '1 tsp vanilla bean paste',
                'pinch salt',
                '2 free-range egg yolks',
                '50g/1 ¾oz granulated sugar',
                '2 tbsp cornflour',
                '30g/1oz unsalted butter',
                '500g/1lb 2oz small strawberries, hulled and halved',
                '1 tbsp caster sugar'],
            instructions: ['Step 1. To make the pastry, put the butter and icing sugar in a food processor and blitz until combined. Add the egg yolks and blitz until smooth. Add the flour and salt and blitz until a dough starts to form. Shape the dough into a ball, flatten to a disc and then wrap and chill in the fridge for around 30 minutes.',
                'Step 2. To make the crème pâtissière, heat the milk, vanilla paste and salt over a low heat until gently steaming.',
                'Step 3. Meanwhile, put the egg yolks, sugar and cornflour in a bowl and stir together until smooth and thick. Slowly pour in the hot milk in a thin stream, stirring with a whisk.',
                'Step 4. Pour the mixture back into the pan and cook over a low heat, stirring constantly, until thickened. Remove from the heat and stir in the butter until it melts and combines with the thickened mixture.',
                'Step 5. Pour the mixture into a bowl and cover the surface with cling film to prevent a skin from forming. Leave to cool for 10 minutes, then chill until needed.',
                'Step 6. Tip the dough onto a lightly floured work surface and dust a bit more flour on top. Roll out to form a circle about 30cm/12in in diameter. Line a 23cm/9in loose-bottomed fluted tart tin with the pastry, gently pressing it down into the tin and up the sides. Leave the pastry overhanging the edge of the tin and trim away any excess pastry. Prick the base all over with a fork, then chill for 30 minutes.',
                'Step 7. Preheat the oven to 200C/180C Fan/Gas 6.',
                'Step 8. Remove the tart tin from the fridge and place on a baking tray. Take a large square of baking paper and crumple it up into a ball, then uncrumple it and use it to line the pastry. Fill with baking beans to support the edges as the pastry bakes.',
                'Step 9. Blind bake for 10–12 minutes, until the edges are just turning golden. Lift out the baking paper and beans and bake for a further 7–10 minutes, until golden and crisp all over. Leave to cool.',
                'Step 10. Sprinkle the strawberries with the caster sugar and set aside for 5 minutes until they begin to release their juices. Remove the crème pâtissière from the fridge and stir briefly until smooth. Pour it into the cooled pastry case and spread evenly.',
                'Step 11. Decorate with the strawberries in concentric circles. Cut into slices and serve.']
        },
        {
            id : 5,
            name: 'No-churn strawberry ice cream',
            imageUrl: `${fifth}`,
            ingredients: ['200ml/7fl oz double cream',
                '100g/3 ½oz natural yoghurt',
                '400g/14oz strawberries, hulled',
                '2 tbsp icing sugar',
                '1 tbsp lemon juice',
                '4 free-range eggs, 2 whole, 2 yolks',
                '100g/3 ½oz granulated sugar',
                'fine salt'],
            instructions: ['Step 1. Whisk the cream in a bowl until soft peaks form when you lift up the whisk. Gently fold in the yoghurt and set aside.',
                'Step 2. Put the strawberries, icing sugar and lemon juice in a food processor or blender and blitz to a smooth purée. Set aside.',
                'Step 3. Mix the whole eggs, egg yolks, granulated sugar and a pinch of salt in a heatproof bowl. Set over a pan of gently simmering water (do not let the base of the bowl touch the water) and stir constantly until it reaches 70C/160F. Remove from the heat and using an electric whisk, beat the egg mixture until pale, thick and at least tripled in volume.',
                'Step 4. Set aside 100ml/3 ½fl oz of the strawberry purée into a small bowl. Mix the remaining purée into the beaten egg mixture until combined.',
                'Step 5. Stir one third of the egg mixture into the whipped cream to loosen, then gently fold in the remaining mixture. Pour into a lidded freezable container.',
                'Step 6. Drizzle the reserved strawberry purée over the cream and swirl a spoon through it a few times to make a ripple. Put the lid on the container and freeze for at least 4 hours, or until firm.',
                'Step 7. Remove from the freezer and leave to stand at room temperature for 10–15 minutes before serving.']
        },
        {
            id : 6,
            name: 'Strawberry mojito',
            imageUrl: `${sixth}`,
            ingredients: ['100g/3½oz caster sugar',
                '50ml/2fl oz water',
                '50ml/2fl oz white rum',
                '25ml/1fl oz freshly squeezed lime juice',
                '8-10 mint leaves',
                '1 fresh strawberry, hulled and quartered',
                'pinch ground black pepper',
                'handful ice, crushed',
                'splash soda water (about 25ml/1fl oz )',
                'fresh mint sprig, to garnish'],
            instructions: ['Step 1. For the sugar syrup, put the caster sugar in a small non-stick saucepan over a medium heat and pour in the water. Stir and bring to the boil. [CAUTION: boiling sugar is extremely hot. Handle very carefully. Use a deep pan to avoid bubbling over.]',
                'Step 2. Once the sugar has dissolved and the liquid is clear, take the pan off the heat and leave to cool.',
                'Step 3. Pour 20ml/¾fl oz of the cooled sugar syrup into a collins glass with all the remaining ingredients except the soda water and garnish, adding the crushed ice last.',
                'Step 4. Top with the soda water to taste, and then muddle the drink gently. If you don’t have a muddler, churn the drink with a spoon from top to bottom for about 25 seconds to extract the strawberry flavour.',
                'Step 5. Add more crushed ice on top and then garnish with the mint sprig.']
        },
        {
            id : 7,
            name: 'Grilled Strawberry-Avocado Toasts with Burrata',
            imageUrl: `${seventh}`,
            ingredients: ['6 scallions',
                '2 cups strawberries, hulled and quartered',
                '1 Hass avocado—peeled, pitted and cut into 1-inch pieces',
                '2 tablespoons fresh lemon juice',
                '¼ teaspoon crushed red pepper',
                'Kosher salt',
                'Black pepper',
                'Four 1-inch-thick slices of rustic bread',
                'Extra-virgin olive oil, for brushing and drizzling',
                '1 garlic clove',
                '8 ounces burrata, cut into bite-size pieces',
                'Balsamic vinegar, for drizzling',
                'Flaky sea salt and torn basil, for garnish'],
            instructions: ['Step 1. Light a grill. Grill the scallions over high heat, turning once, until lightly charred, 3 minutes. Transfer to a work surface and let cool, then cut into 1-inch lengths. Leave the grill on.',
                'Step 2. In a medium bowl, mix the scallions with the strawberries, avocado, lemon juice and crushed red pepper. Season with kosher salt and black pepper and let stand at room temperature for 15 minutes.',
                'Step 3. Meanwhile, brush the bread with olive oil and grill over high heat, turning once, until lightly charred, about 3 minutes. Transfer to a platter and rub with the garlic clove. Top with the burrata and the strawberry salad. Drizzle with olive oil and balsamic vinegar. Garnish with flaky sea salt and torn basil serve.']
        },
        {
            id : 8,
            name: 'Strawberry-Champagne Granita',
            imageUrl: `${eighth}`,
            ingredients: ['6 scallions',
                '1 ½ cups sugar',
                'One 750-milliliter bottle chilled rosé Champagne',
                '2 tablespoons fresh lemon juice'],
            instructions: ['Step 1. In a medium saucepan, combine half of the strawberries with the sugar and ⅓ cup of water and bring to a simmer. Cook over moderate heat, stirring occasionally, until the sugar is dissolved and the liquid is slightly thickened, about 5 minutes. Transfer the strawberry mixture to a food processor. Add the remaining strawberries and puree until smooth.',
                'Step 2. Strain the puree through a fine sieve set over a large bowl. Add the Champagne and lemon juice and mix well. Pour the mixture into a 9-by-13-inch glass or stainless steel baking dish.',
                'Step 3. Freeze the granita for 2 hours. Scrape the frozen edges into the center. Freeze for another 3 hours, scraping hourly, until the granita is icy and flaky. Freeze for 8 hours or overnight. Scrape the granita into bowls and serve.']
        }
    ];

    const [showDessertPopup, setShowDessertPopup] = useState(false);
    const [selectedDessert, setSelectedDessert] = useState(null);

    const handleShowDessert = (dessert) => {
        setSelectedDessert(dessert);
        setShowDessertPopup(true);
    };

    const handleClosePopup = () => {
        setShowDessertPopup(false);
    };

    return (
        <div>
            <h1 className="contentTitle">겨울 맞이 딸기 디저트 소개</h1>
            <div className="desserts">
                {desserts.map((dessert) => (
                    <DessertCard
                        key={dessert.id}
                        name={dessert.name}
                        image={dessert.imageUrl}
                        onShowDetails={() => handleShowDessert(dessert)}
                    />
                ))}
            </div>
            {showDessertPopup && selectedDessert && (
                <DessertPopup
                    name={selectedDessert.name}
                    image={selectedDessert.imageUrl}
                    ingredients={selectedDessert.ingredients}
                    instructions={selectedDessert.instructions}
                    onClose={handleClosePopup}
                />
            )}
        </div>
    );
};

const DessertCard = ({name, image, onShowDetails}) => {
    return (
        <div className="dessert-card" onClick={onShowDetails}>
            <Card
                name={name}
                imageUrl={image}
                ingredients=""
                instruction=""
            />
        </div>
    );
};

const DessertPopup = ({name, image, ingredients, instructions, onClose}) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close-button" onClick={onClose}>×</span>
                <h2>{name}</h2>
                <img src={image} alt={name}/>
                <h3>Ingredients</h3>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3>Recipe</h3>
                <ul>
                    {instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CardContainer;