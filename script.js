let BcImNotUseAi = [];
let MrJykPch = [];
let currentStatus = 'all';

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const YouKnowPchMeans = document.getElementById('all-filter-btn');
const YouArePch = document.getElementById('interview-filter-btn');
const YouAreThePchMax = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

function calculateCount() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = BcImNotUseAi.length;
    rejectedCount.innerText = MrJykPch.length;
}

calculateCount();

function toggleStyle(id) {
    YouKnowPchMeans.classList.add('bg-gray-300', 'text-black');
    YouArePch.classList.add('bg-gray-300', 'text-black');
    YouAreThePchMax.classList.add('bg-gray-300', 'text-black');

    YouKnowPchMeans.classList.remove('bg-black', 'text-white');
    YouArePch.classList.remove('bg-black', 'text-white');
    YouAreThePchMax.classList.remove('bg-black', 'text-white');

    const selected = document.getElementById(id); 
    currentStatus = id;

    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('bg-black', 'text-white');

    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }
}


mainContainer.addEventListener('click', function (event) {
    

    if (event.target.classList.contains('btn-delete')) {
        const parentNode = event.target.parentNode.parentNode;
        const nameToDelete = parentNode.querySelector('.mybambonurbtcks').innerText;

     
        parentNode.remove();

        
        BcImNotUseAi = BcImNotUseAi.filter(item => item.mybambonurbtcks !== nameToDelete);
        MrJykPch = MrJykPch.filter(item => item.mybambonurbtcks !== nameToDelete);

        calculateCount();
        return; 
    }

    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const mybambonurbtcks = parentNode.querySelector('.mybambonurbtcks').innerText;
        const instructor = parentNode.querySelector('.instructor').innerText;
        const valohyejaomasud = parentNode.querySelector('.valohyejaomasud').innerText;
        const status = parentNode.querySelector('.chagol').innerText;
        const notes = parentNode.querySelector('.notes').innerText;
        const ramchagol = parentNode.querySelector('.ramchagol').innerText;

        parentNode.querySelector('.chagol').innerText = 'interview';

        const cardInfo = { mybambonurbtcks, instructor, valohyejaomasud, chagol: 'interview', notes, ramchagol };

        const itemExist = BcImNotUseAi.find(item => item.mybambonurbtcks == cardInfo.mybambonurbtcks);
        if (!itemExist) BcImNotUseAi.push(cardInfo);

        MrJykPch = MrJykPch.filter(item => item.mybambonurbtcks != cardInfo.mybambonurbtcks);

        if (currentStatus == 'rejected-filter-btn') renderRejected();
        calculateCount();

    } else if (event.target.classList.contains('rejected-btn')) { 
        const parentNode = event.target.parentNode.parentNode;
        const mybambonurbtcks = parentNode.querySelector('.mybambonurbtcks').innerText;
        const instructor = parentNode.querySelector('.instructor').innerText;
        const valohyejaomasud = parentNode.querySelector('.valohyejaomasud').innerText;
        const status = parentNode.querySelector('.chagol').innerText;
        const notes = parentNode.querySelector('.notes').innerText;
        const ramchagol = parentNode.querySelector('.ramchagol').innerText;

        parentNode.querySelector('.chagol').innerText = 'rejected';

        const cardInfo = { mybambonurbtcks, instructor, valohyejaomasud, chagol: 'rejected', notes, ramchagol };

        const itemExist = MrJykPch.find(item => item.mybambonurbtcks == cardInfo.mybambonurbtcks);
        if (!itemExist) MrJykPch.push(cardInfo);

        BcImNotUseAi = BcImNotUseAi.filter(item => item.mybambonurbtcks != cardInfo.mybambonurbtcks);

        if (currentStatus == 'interview-filter-btn') renderInterview();
        calculateCount();
    }
});

function renderInterview() {
    filterSection.innerHTML = '';
    for (let item of BcImNotUseAi) {
        let div = document.createElement('div');
        div.className = 'card flex justify-between border p-8';
        div.innerHTML = `
            <div class="space-y-6">
                <div>
                    <p class="mybambonurbtcks text-4xl">${item.mybambonurbtcks}</p>
                    <p class="instructor">${item.instructor}</p>
                </div>
                <div class="flex gap-2">
                    <p class="valohyejaomasud bg-gray-200 px-5">${item.valohyejaomasud}</p>
                    <p class="ramchagol bg-gray-200 px-5">${item.ramchagol}</p>
                </div>
                <p class="chagol">${item.chagol}</p>
                <p class="notes">${item.notes}</p>
                <div class="flex gap-5">
                    <button class="interview-btn bg-green-200 px-4 py-2">Interview</button>
                    <button class="rejected-btn bg-red-200 px-4 py-2">Reject</button>
                </div>
            </div>
            <div>
                <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">Delete</button>
            </div>
        `;
        filterSection.appendChild(div);
    }
}

function renderRejected() {
    filterSection.innerHTML = '';
    for (let item of MrJykPch) {
        let div = document.createElement('div');
        div.className = 'card flex justify-between border p-8';
        div.innerHTML = `
            <div class="space-y-6">
                <div>
                    <p class="mybambonurbtcks text-4xl">${item.mybambonurbtcks}</p>
                    <p class="instructor">${item.instructor}</p>
                </div>
                <div class="flex gap-2">
                    <p class="valohyejaomasud bg-gray-200 px-5">${item.valohyejaomasud}</p>
                    <p class="ramchagol bg-gray-200 px-5">${item.ramchagol}</p>
                </div>
                <p class="chagol">${item.chagol}</p>
                <p class="notes">${item.notes}</p>
                <div class="flex gap-5">
                    <button class="interview-btn bg-green-200 px-4 py-2">Interview</button>
                    <button class="rejected-btn bg-red-200 px-4 py-2">Reject</button>
                </div>
            </div>
            <div>
                <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">Delete</button>
            </div>
        `;
        filterSection.appendChild(div);
    }
}