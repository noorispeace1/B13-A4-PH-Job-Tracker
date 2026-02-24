let BcImNotUseAi = [];
let MrJykPch = [];     
let currentStatus = 'all-filter-btn';

// Elements
let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
let rejectedSection = document.getElementById('no-data-container'); 

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
    
    [YouKnowPchMeans, YouArePch, YouAreThePchMax].forEach(btn => {
        btn.classList.add('bg-gray-300', 'text-black');
        btn.classList.remove('bg-black', 'text-white');
    });

    const selected = document.getElementById(id); 
    currentStatus = id;
    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('bg-black', 'text-white');

    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        renderInterview();
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        rejectedSection.classList.add('hidden');
    } else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        renderRejected();
    }
}

mainContainer.addEventListener('click', function (event) {
    if (event.target.closest('.btn-delete')) {
        const parentNode = event.target.closest('.card');
        const nameToDelete = parentNode.querySelector('.mybambonurbtcks').innerText;
        parentNode.remove();

        BcImNotUseAi = BcImNotUseAi.filter(item => item.mybambonurbtcks !== nameToDelete);
        MrJykPch = MrJykPch.filter(item => item.mybambonurbtcks !== nameToDelete);

        if (currentStatus === 'interview-filter-btn') renderInterview();
        if (currentStatus === 'rejected-filter-btn') renderRejected();
        
        calculateCount();
        return; 
    }

    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.closest('.card');
        const cardInfo = getCardData(parentNode, 'interview');

        if (!BcImNotUseAi.find(item => item.mybambonurbtcks == cardInfo.mybambonurbtcks)) {
            BcImNotUseAi.push(cardInfo);
        }
        MrJykPch = MrJykPch.filter(item => item.mybambonurbtcks != cardInfo.mybambonurbtcks);

        
        parentNode.querySelector('.chagol h1').innerText = 'interview';

        if (currentStatus == 'interview-filter-btn') renderInterview();
        if (currentStatus == 'rejected-filter-btn') renderRejected();
        calculateCount();

    } else if (event.target.classList.contains('rejected-btn')) { 
        const parentNode = event.target.closest('.card');
        const cardInfo = getCardData(parentNode, 'rejected');

        if (!MrJykPch.find(item => item.mybambonurbtcks == cardInfo.mybambonurbtcks)) {
            MrJykPch.push(cardInfo);
        }
        BcImNotUseAi = BcImNotUseAi.filter(item => item.mybambonurbtcks != cardInfo.mybambonurbtcks);

        
        parentNode.querySelector('.chagol h1').innerText = 'rejected';

        if (currentStatus == 'interview-filter-btn') renderInterview();
        if (currentStatus == 'rejected-filter-btn') renderRejected();
        calculateCount();
    }
});

function getCardData(parentNode, status) {
    return {
        mybambonurbtcks: parentNode.querySelector('.mybambonurbtcks').innerText,
        instructor: parentNode.querySelector('.instructor').innerText,
        valohyejaomasud: parentNode.querySelector('.valohyejaomasud').innerText,
        chagol: status,
        notes: parentNode.querySelector('.notes').innerText,
        ramchagol: 'Interview / Rejected'
    };
}

function renderInterview() {
    filterSection.innerHTML = '';
    if (BcImNotUseAi.length === 0) {
        filterSection.classList.add('hidden');
        rejectedSection.classList.remove('hidden');
    } else {
        filterSection.classList.remove('hidden');
        rejectedSection.classList.add('hidden');
        BcImNotUseAi.forEach(item => filterSection.appendChild(createTemplate(item)));
    }
}

function renderRejected() {
    filterSection.innerHTML = '';
    if (MrJykPch.length === 0) {
        filterSection.classList.add('hidden');
        rejectedSection.classList.remove('hidden');
    } else {
        filterSection.classList.remove('hidden');
        rejectedSection.classList.add('hidden');
        MrJykPch.forEach(item => filterSection.appendChild(createTemplate(item)));
    }
}

function createTemplate(item) {
    let div = document.createElement('div');
    div.className = 'card flex justify-between bg-white shadow-sm border border-gray-100 p-8 rounded-xl';
    div.innerHTML = `
        <div class="space-y-6">
            <div>
                <p class="mybambonurbtcks text-4xl font-bold">${item.mybambonurbtcks}</p>
                <p class="instructor text-xl text-gray-600">${item.instructor}</p>
                <p class="valohyejaomasud text-gray-400 text-xs italic">${item.valohyejaomasud}</p>
            </div>
            <div class="inline-block"><h1 class="px-5 py-1 rounded-xl border bg-blue-50 text-blue-600 text-sm font-bold uppercase">${item.chagol}</h1></div>
            <p class="notes text-gray-600 italic">${item.notes}</p>
            <div class="flex gap-5">
                <button class="interview-btn border border-green-500 text-green-500 px-4 py-2 rounded-md font-bold">Interview</button>
                <button class="rejected-btn border border-red-500 text-red-500 px-4 py-2 rounded-md font-bold">Rejected</button>
            </div>
        </div>
        <div>
            <button class="btn-delete bg-red-100 text-red-600 h-10 w-10 flex items-center justify-center rounded-full"><i class="fa-solid fa-trash-can"></i></button>
        </div>`;
    return div;
}