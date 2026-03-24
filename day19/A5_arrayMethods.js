const dataset = [{"firstName":"Othilia","lastName":"Laxen","email":"olaxen0@businesswire.com"},
{"firstName":"Tobie","lastName":"Motten","email":"tmotten1@gmpg.org"},
{"firstName":"Myra","lastName":"Yeatman","email":"myeatman2@cocolog-nifty.com"},
{"firstName":"Cari","lastName":"Nevin","email":"cnevin3@google.com.br"},
{"firstName":"Mychal","lastName":"Selvey","email":"mselvey4@upenn.edu"},
{"firstName":"Demetria","lastName":"Fownes","email":"dfownes5@whitehouse.gov"},
{"firstName":"Garrott","lastName":"Rosindill","email":"grosindill6@bing.com"},
{"firstName":"Anica","lastName":"Livock","email":"alivock7@state.gov"},
{"firstName":"Devan","lastName":"Lovekin","email":"dlovekin8@mozilla.com"},
{"firstName":"Addie","lastName":"Esslement","email":"aesslement9@state.gov"},
{"firstName":"Jean","lastName":"Earley","email":"jearleya@mit.edu"},
{"firstName":"Cyndie","lastName":"Cuttelar","email":"ccuttelarb@ft.com"},
{"firstName":"Kacy","lastName":"Cuell","email":"kcuellc@hugedomains.com"},
{"firstName":"Hynda","lastName":"Newrick","email":"hnewrickd@springer.com"},
{"firstName":"Cyril","lastName":"McMahon","email":"cmcmahone@tamu.edu"},
{"firstName":"Casi","lastName":"Archdeckne","email":"carchdecknef@berkeley.edu"},
{"firstName":"Curran","lastName":"Toseland","email":"ctoselandg@bandcamp.com"},
{"firstName":"Meghan","lastName":"Yakuntzov","email":"myakuntzovh@geocities.com"},
{"firstName":"Dulcy","lastName":"Munslow","email":"dmunslowi@xinhuanet.com"},
{"firstName":"Rosabel","lastName":"Duddle","email":"rduddlej@google.com.au"},
{"firstName":"Haroun","lastName":"Baiden","email":"hbaidenk@cpanel.net"},
{"firstName":"Sherlock","lastName":"Lillecrap","email":"slillecrapl@telegraph.co.uk"},
{"firstName":"Phillis","lastName":"Twinbourne","email":"ptwinbournem@netvibes.com"},
{"firstName":"Keane","lastName":"Andrei","email":"kandrein@foxnews.com"},
{"firstName":"Daniella","lastName":"Poone","email":"dpooneo@clickbank.net"},
{"firstName":"Malcolm","lastName":"Kemm","email":"mkemmp@feedburner.com"},
{"firstName":"Siward","lastName":"Whitsun","email":"swhitsunq@marriott.com"},
{"firstName":"Zita","lastName":"Burnand","email":"zburnandr@reuters.com"},
{"firstName":"Felic","lastName":"Pacquet","email":"fpacquets@opensource.org"},
{"firstName":"Gordan","lastName":"Bracegirdle","email":"gbracegirdlet@mapquest.com"}]

function getAllEmails(data) {
  return data.map(user => user.email);
}

const emails = getAllEmails(dataset);
console.log(emails);

function getFormattedEmailNames(data) {
  return data.map(user => {
    const namePart = user.email.split("@")[0];
    return namePart.charAt(0).toUpperCase() + namePart.slice(1);
  });
}

const formattedNames = getFormattedEmailNames(dataset);
console.log(formattedNames);

function getIntroductionMessages(data) {
  return data.map(user => {
    const first =
      user.firstName.charAt(0).toUpperCase() +
      user.firstName.slice(1).toLowerCase();

    const last =
      user.lastName.charAt(0).toUpperCase() +
      user.lastName.slice(1).toLowerCase();

    return `Hi I am ${first} ${last}. You can reach out to me on ${user.email}.`;
  });
}

const messages = getIntroductionMessages(dataset);
console.log(messages);

function sortByEmailAscending(data) {
  return [...data].sort((a, b) =>
    a.email.localeCompare(b.email)
  );
}

const sortedData = sortByEmailAscending(dataset);
console.log(sortedData);

function addRandomAge(data) {
  return data.map(user => ({
    ...user,
    age: Math.floor(Math.random() * (35 - 10 + 1)) + 10
  }));
}

const updatedDataset = addRandomAge(dataset);
console.log(updatedDataset);