import './Dashboard.css'
function Dashboard()
{
    return(
                <>
                <nav class="navbar navbar-light bg-light px-3 justify-content-between">
            <div class="d-flex align-items-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png" alt="logo" width="40" />
            <span class="fw-bold fs-5">Byte and Bite</span>
            </div>
            <button class="btn login-btn px-3">Login</button>
        </nav>

        <div class="container text-center mt-4">
            <h3 class="fw-bold">Welcome to Our Canteen</h3>
            <div class="my-3">
            <img src="https://cdn.pixabay.com/photo/2017/06/02/18/24/indian-food-2368523_1280.jpg" alt="special dish" class="canteen-img" />
            </div>
            <p class="intro-text">
            <strong>Hey</strong>, have your ever thought about how<br />
            canteens are like the art of any community?
            </p>

            <div class="d-flex justify-content-center gap-3 mt-3">
            <button class="btn btn-dark rounded-button">Menu</button>
            <button class="btn highlight-btn rounded-button">Book a table</button>
            </div>

            <div class="mt-5">
            <h4 class="fw-bold">Our special Dishes</h4>
            <p class="text-muted">
                You know what makes canteen awesome!
            </p>
            <p class="px-2">
                It’s not just the food—it’s the special dishes that everyone raves about. You know, the ones that make you skip classes just to get a taste.
            </p>
            </div>
        </div>
        </>
    )
}
export default Dashboard