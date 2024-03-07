import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import profileBg from "../../assets/images/profile_bg.svg"
import profile from "../../assets/images/profileSVG.svg"

export default function Profile() {


    // TAB
const tabIndicator = document.querySelectorAll('[data-toggle="tab"]')
const tabContent = document.querySelectorAll('.tab-content')

tabIndicator.forEach(item=> {
    item.addEventListener('click', function(e) {
        e.preventDefault()

        tabIndicator.forEach(i=> i.classList.remove('active'))
        tabContent.forEach(i=> i.classList.add('hidden'))

        this.classList.add('active')
        document.querySelector(this.dataset.target).classList.remove('hidden')
    })
})


    return (
        <>
            <Navbar />

    {/* <!-- MAIN --> */}
    <div class="pl-0  transition-all" id="main">
        <div class="p-4">
            <div class="relative">
                <img src={profileBg} class="w-full h-72 object-cover rounded-lg" alt="" />
                <a href="#" class="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/50 hover:bg-white flex items-center justify-center">
                    <i class='bx bx-edit-alt' >q</i>
                </a>
            </div>
            <div class="flex items-center gap-4 mt-4">
                <img src={profile} class="w-28 h-28 object-cover rounded-full" alt="" />
                <div>
                    <h2 class="text-2xl font-semibold mb-2">Fajar Std</h2>
                    <span class="text-lg text-gray-500">fajar_</span>
                </div>
                <a href="#" class="py-2 px-4 rounded bg-blue-600 sm:flex items-center gap-2 text-white hover:bg-blue-700 ml-auto hidden">
                    <i class='bx bx-edit-alt' ></i>
                    Edit Profile
                </a>
            </div>
            <p class="text-gray-500 text-lg mt-4 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vitae tempora culpa laborum inventore mollitia eius odit voluptatem perspiciatis magnam ratione sunt, facilis, possimus sed delectus. Tempore quaerat aspernatur, numquam deleniti omnis alias accusamus sit ea expedita natus ipsa, eos aperiam inventore totam? Maiores voluptate excepturi sunt quia quo officiis.</p>
            <div>
                <div class="flex items-center gap-8 tab-indicator border-b border-gray-200">
                    <span data-toggle="tab" data-target="#security" class="active">Items</span>
                    <span data-toggle="tab" data-target="#activities">My Activities</span>
                    <span data-toggle="tab" data-target="#contact">Info</span>
                </div>
                <div class="tab-content mt-4" id="security">
                    <h2 class="text-2xl font-semibold">My Items list</h2>
                </div>
                <div class="tab-content mt-4 hidden" id="activities">
                    <h2 class="text-2xl font-semibold">My Activities</h2>
                </div>
                <div class="tab-content mt-4 hidden" id="contact">
                    <h2 class="text-2xl font-semibold">My Info</h2>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- MAIN --> */}
    

            <Footer />
        </>
    );
}