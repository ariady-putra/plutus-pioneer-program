import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap-datetimepicker.min.css";
import * as L from "lucid-cardano";

const vestingScript = {
  type: "PlutusV2",
  script:
    "590b30590b2d0100003232323322323233223232323232323233223233223232323232323232333222323232322323222323253353232323253355335323235002222222222222533533355301a12001321233001225335002210031001002502c25335333573466e3c0380040ec0e84d40b8004540b4010840ec40e4d401488009400440b04cd5ce2491f62656e65666963696172792773207369676e6174757265206d697373696e670002b15335323232350022235002223500522350022253335333501900b00600215335001153350051333501800b00300710361333501800b00300710361333501800b00300735500322222222222200533501433501635029350052200102d335015502802d123333333300122333573466e1c0080040bc0b8894cd4ccd5cd19b8700200102f02e101515335333573466e240080040bc0b8404c405088ccd5cd19b8800200102f02e22333573466e240080040bc0b888ccd5cd19b8900200102e02f22333573466e200080040b80bc894cd4ccd5cd19b8900200102f02e10011002225335333573466e240080040bc0b84008400440b04cd5ce248114646561646c696e65206e6f7420726561636865640002b102b135001220023333573466e1cd55cea80224000466442466002006004646464646464646464646464646666ae68cdc39aab9d500c480008cccccccccccc88888888888848cccccccccccc00403403002c02802402001c01801401000c008cd408c090d5d0a80619a8118121aba1500b33502302535742a014666aa04eeb94098d5d0a804999aa813bae502635742a01066a0460606ae85401cccd5409c0c5d69aba150063232323333573466e1cd55cea80124000466a0486464646666ae68cdc39aab9d5002480008cd40a8cd40edd69aba15002303e357426ae8940088c98c8100cd5ce02182101f09aab9e5001137540026ae854008c8c8c8cccd5cd19b8735573aa0049000119a81499a81dbad35742a004607c6ae84d5d1280111931902019ab9c04304203e135573ca00226ea8004d5d09aba2500223263203c33573807e07c07426aae7940044dd50009aba1500533502375c6ae854010ccd5409c0b48004d5d0a801999aa813bae200135742a004605e6ae84d5d1280111931901c19ab9c03b03a036135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d55cf280089baa00135742a008603e6ae84d5d1280211931901519ab9c02d02c0283333573466e1cd55ce9baa0054800080ac8c98c80a4cd5ce0160158139999ab9a3370e6aae7540192000233221233001003002375c6ae854018dd69aba135744a00c464c6405066ae700ac0a809840a44c98c809ccd5ce2490350543500029135573ca00226ea80044d55cf280089baa00132001355023221122253350011350032200122133350052200230040023335530071200100500400112223500222350032253335333500800700400215335003100110261025102612223232323253335006215333500621533350082130044984c00d261533350072130044984c00d26100d100b1533350072130044984c00d261533350062130044984c00d26100c1533350052100a100b100915333500521533350072130054984c011261533350062130054984c01126100c100a1533350062130054984c011261533350052130054984c01126100b2533350052153335007215333500721333500b00a002001161616100b153335006215333500621333500a009002001161616100a10092533350042153335006215333500621333500a009002001161616100a1533350052153335005213335009008002001161616100910082533350032153335005215333500521333500900800200116161610091533350042153335004213335008007002001161616100810072533350022153335004215333500421333500800700200116161610081533350032153335003213335007006002001161616100710061235001222222220071222003122200212220011221233001003002122123300100300212212330010030021232230023758002640026aa034446666aae7c004940288cd4024c010d5d080118019aba200201a232323333573466e1cd55cea80124000466442466002006004601c6ae854008c014d5d09aba2500223263201833573803603402c26aae7940044dd50009191919191999ab9a3370e6aae75401120002333322221233330010050040030023232323333573466e1cd55cea80124000466442466002006004602e6ae854008cd403c058d5d09aba2500223263201d33573804003e03626aae7940044dd50009aba150043335500875ca00e6ae85400cc8c8c8cccd5cd19b875001480108c84888c008010d5d09aab9e500323333573466e1d4009200223212223001004375c6ae84d55cf280211999ab9a3370ea00690001091100191931900f99ab9c02202101d01c01b135573aa00226ea8004d5d0a80119a805bae357426ae8940088c98c8064cd5ce00e00d80b89aba25001135744a00226aae7940044dd5000899aa800bae75a224464460046eac004c8004d5405c88c8cccd55cf80112804119a8039991091980080180118031aab9d5002300535573ca00460086ae8800c0604d5d080088910010910911980080200189119191999ab9a3370ea002900011a80398029aba135573ca00646666ae68cdc3a801240044a00e464c6402866ae7005c0580480444d55cea80089baa0011212230020031122001232323333573466e1d400520062321222230040053007357426aae79400c8cccd5cd19b875002480108c848888c008014c024d5d09aab9e500423333573466e1d400d20022321222230010053007357426aae7940148cccd5cd19b875004480008c848888c00c014dd71aba135573ca00c464c6402466ae7005405004003c0380344d55cea80089baa001232323333573466e1cd55cea80124000466442466002006004600a6ae854008dd69aba135744a004464c6401c66ae700440400304d55cf280089baa0012323333573466e1cd55cea800a400046eb8d5d09aab9e500223263200c33573801e01c01426ea80048c8c8c8c8c8cccd5cd19b8750014803084888888800c8cccd5cd19b875002480288488888880108cccd5cd19b875003480208cc8848888888cc004024020dd71aba15005375a6ae84d5d1280291999ab9a3370ea00890031199109111111198010048041bae35742a00e6eb8d5d09aba2500723333573466e1d40152004233221222222233006009008300c35742a0126eb8d5d09aba2500923333573466e1d40192002232122222223007008300d357426aae79402c8cccd5cd19b875007480008c848888888c014020c038d5d09aab9e500c23263201533573803002e02602402202001e01c01a26aae7540104d55cf280189aab9e5002135573ca00226ea80048c8c8c8c8cccd5cd19b875001480088ccc888488ccc00401401000cdd69aba15004375a6ae85400cdd69aba135744a00646666ae68cdc3a80124000464244600400660106ae84d55cf280311931900719ab9c01101000c00b135573aa00626ae8940044d55cf280089baa001232323333573466e1d400520022321223001003375c6ae84d55cf280191999ab9a3370ea004900011909118010019bae357426aae7940108c98c802ccd5ce00700680480409aab9d50011375400224464646666ae68cdc3a800a40084a00c46666ae68cdc3a8012400446a010600c6ae84d55cf280211999ab9a3370ea00690001091100111931900619ab9c00f00e00a009008135573aa00226ea8004484888c00c010448880048c8cccd5cd19b8750014800880188cccd5cd19b8750024800080188c98c8018cd5ce00480400200189aab9d37540029309100109100089000a490350543100112323001001223300330020020011",
};

const VestingDatum = L.Data.Object({
  beneficiary: L.Data.String,
  deadline: L.Data.BigInt,
});

function removeChildren(elt) {
  while (elt.firstChild) {
    elt.removeChild(elt.lastChild);
  }
}

async function loadCardano() {
  const nami = window.cardano.nami;
  if (!nami) {
    setTimeout(loadCardano);
  } else {
    const api = await nami.enable();
    console.log("nami enabled");
    console.log("Blockfrost PID: " + process.env.BLOCKFROST_PID);
    const lucid = await L.Lucid.new(
      new L.Blockfrost(
        "https://cardano-preview.blockfrost.io/api/v0",
        process.env.BLOCKFROST_PID
      ),
      "Preview"
    );
    console.log("lucid active");
    lucid.selectWallet(api);
    return lucid;
  }
}

async function submitCardanoTx(signedTx) {
  const tid = await signedTx.submit();
  console.log("Cardano tx submitted: " + tid);
  addLinkToTable(
    "cardanoTxTable",
    "https://preview.cardanoscan.io/transaction/" + tid,
    tid
  );
}

async function signAndSubmitCardanoTx(tx) {
  try {
    const signedTx = await tx.sign().complete();
    await submitCardanoTx(signedTx);
  } catch (err) {
    alert(`Cardano transaction:\ninfo: ${err.info}\nmessage: ${err.message}`);
    throw err;
  }
}

async function getCardanoPKH() {
  const addr = await lucid.wallet.address();
  const details = await L.getAddressDetails(addr);
  return details.paymentCredential.hash;
}

async function getStatus() {
  const pkh = await getCardanoPKH();
  const utxos = await lucid.wallet.getUtxos();
  const lovelace = utxos.reduce((acc, utxo) => acc + utxo.assets.lovelace, 0n);

  const vestings = await vestingUTxOs();

  return {
    cardanoPKH: pkh,
    cardanoBalance: lovelace,
    vestingUTxOs: vestings,
  };
}

function addCell(tr, content) {
  const td = document.createElement("td");
  tr.appendChild(td);
  td.appendChild(document.createTextNode(content));
}

function addLinkToTable(tableId, href, text) {
  const txTable = document.getElementById("cardanoTxTable");
  const tr = document.createElement("tr");
  txTable.appendChild(tr);
  const td = document.createElement("td");
  tr.appendChild(td);
  const a = document.createElement("a");
  td.appendChild(a);
  a.setAttribute("href", href);
  a.setAttribute("target", "_blank");
  a.appendChild(document.createTextNode(text));
}

function addCopyCell(row, text) {
  const td = document.createElement("td");
  row.appendChild(td);
  const span = document.createElement("span");
  td.appendChild(span);
  const uid = String(Math.random()).slice(2);
  span.setAttribute("id", uid);
  span.appendChild(document.createTextNode(text));
  const button = document.createElement("button");
  td.appendChild(button);
  button.setAttribute("type", "button");
  button.classList.add("btn");
  button.classList.add("btn-outline-primary");
  button.classList.add("btn-sm");
  button.addEventListener("click", () => onCopy(uid));
}

async function setStatus() {
  const status = await getStatus();

  const cardanoPKH = document.getElementById("cardanoPKH");
  removeChildren(cardanoPKH);
  cardanoPKH.appendChild(document.createTextNode(status.cardanoPKH));

  const cardanoBalance = document.getElementById("cardanoBalance");
  const ada = Number(status.cardanoBalance) / 1000000;
  removeChildren(cardanoBalance);
  cardanoBalance.appendChild(document.createTextNode(ada));

  const vestingUTxOsTable = document.getElementById("vestingUTxOsTable");
  removeChildren(vestingUTxOsTable);
  for (const x of status.vestingUTxOs) {
    const tr = document.createElement("tr");
    vestingUTxOsTable.appendChild(tr);

    addCopyCell(tr, x.utxo.txHash + "#" + x.utxo.outputIndex);
    addCopyCell(tr, x.datum.beneficiary);
    addCell(tr, x.utxo.assets.lovelace);
    addCell(tr, new Date(Number(x.datum.deadline)));
  }
}

async function vestingUTxOs() {
  const utxos = await lucid.utxosAt(vestingAddress);
  const res = [];
  for (const utxo of utxos) {
    const datum = utxo.datum;
    if (datum) {
      try {
        const d = L.Data.from(datum, VestingDatum);
        res.push({
          utxo: utxo,
          datum: d,
        });
      } catch (err) {}
    }
  }
  return res;
}

async function findUTxO(ref) {
  const chunks = ref.split("#");
  const tid = chunks[0];
  const ix = parseInt(chunks[1]);
  const utxos = await vestingUTxOs();
  for (const utxo of utxos) {
    if (utxo.utxo.txHash == tid && utxo.utxo.outputIndex == ix) {
      return utxo;
    }
  }
  return null;
}

function getPKH(wallet) {
  switch (wallet) {
    case "Nami":
      return process.env.NAMI_PKH;
    case "Eternl":
      return process.env.ETNL_PKH;
    default:
      return "";
  }
}

const week03homework1Script = {
  type: "PlutusV2",
  script:
    "590b64590b610100003232323233223232323232323232323233223232323232323232333222323232322323232223232533532323232323253355335355001223232350012235005225333533350170060040021533500315335001103210331032103310323350143502b3500922200102e501415335333553017120013501650182333573466e3cd401c88800c0040b00ad400840ac4cd5ce2481244265666f726520646561646c696e6520627574206e6f74207369676e65642062792042310002a102a102b15335323232350012235002225333533350160073502f006002153350011031103210311032500335007222001501215335333553017120013501650182333573466e3cd401c8880080040b00ad400840ac4cd5ce248123416674657220646561646c696e6520627574206e6f74207369676e65642062792042320002a102a13550022222222222220051355001222222222222004135001220023333573466e1cd55cea80224000466442466002006004646464646464646464646464646666ae68cdc39aab9d500c480008cccccccccccc88888888888848cccccccccccc00403403002c02802402001c01801401000c008cd4090094d5d0a80619a8120129aba1500b33502402635742a014666aa050eb9409cd5d0a804999aa8143ae502735742a01066a04805e6ae85401cccd540a00c1d69aba150063232323333573466e1cd55cea801240004664424660020060046464646666ae68cdc39aab9d5002480008cc8848cc00400c008cd40e9d69aba15002303c357426ae8940088c98c8100cd5ce02082001f09aab9e5001137540026ae854008c8c8c8cccd5cd19b8735573aa0049000119a81219a81d3ad35742a00460786ae84d5d1280111931902019ab9c04104003e135573ca00226ea8004d5d09aba2500223263203c33573807a07807426aae7940044dd50009aba1500533502475c6ae854010ccd540a00b08004d5d0a801999aa8143ae200135742a004605c6ae84d5d1280111931901c19ab9c039038036135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d55cf280089baa00135742a008603c6ae84d5d1280211931901519ab9c02b02a0283333573466e1cd55ce9baa0054800080a48c98c80a4cd5ce0150148139999ab9a3370e6aae75401d2000233322212333001004003002375c6ae85401cdd71aba15006375a6ae84d5d1280311931901419ab9c029028026102713263202733573892010350543500027135573ca00226ea80044d5d1280089aab9e500113754002244464646464a666a00c42a666a00c42a666a0104260089309801a4c2a666a00e4260089309801a4c201e201a2a666a00e4260089309801a4c2a666a00c4260089309801a4c201c2a666a00a42018201a20162a666a00a42a666a00e42600a930980224c2a666a00c42600a930980224c201c20182a666a00c42600a930980224c2a666a00a42600a930980224c201a4a666a00a42a666a00e42a666a00e42666a0160140040022c2c2c201a2a666a00c42a666a00c42666a0140120040022c2c2c201820164a666a00842a666a00c42a666a00c42666a0140120040022c2c2c20182a666a00a42a666a00a42666a0120100040022c2c2c201620144a666a00642a666a00a42a666a00a42666a0120100040022c2c2c20162a666a00842a666a00842666a01000e0040022c2c2c201420124a666a00442a666a00842a666a00842666a01000e0040022c2c2c20142a666a00642a666a00642666a00e00c0040022c2c2c20122010246a0024444444400e24424660020060042246666666600244666ae68cdc380100080e00d91299a999ab9a3370e004002038036200c2a66a666ae68cdc480100080e00d8802080291199ab9a3371000400203803644666ae68cdc480100080e00d91199ab9a3371200400203603844666ae68cdc400100080d80e11299a999ab9a337120040020380362002200444a66a666ae68cdc480100080e00d880108008911001891100109110008919091980091199a802910010010008011a80091000990009aa80c1108911299a80089a80191000910999a802910011802001199aa9803890008028020008891980091299a801080b08008098919118011bac001320013550172233335573e0024a014466a01260086ae84008c00cd5d100100b919191999ab9a3370e6aae7540092000233221233001003002300c35742a004600a6ae84d5d1280111931900b99ab9c018017015135573ca00226ea80048c8c8c8c8cccd5cd19b8735573aa00890001199991110919998008028020018011919191999ab9a3370e6aae7540092000233221233001003002301535742a00466a01e0286ae84d5d1280111931900e19ab9c01d01c01a135573ca00226ea8004d5d0a802199aa8043ae500735742a0066464646666ae68cdc3a800a4008464244460040086ae84d55cf280191999ab9a3370ea0049001119091118008021bae357426aae7940108cccd5cd19b875003480008488800c8c98c8078cd5ce00f80f00e00d80d09aab9d5001137540026ae854008cd402dd71aba135744a004464c6403066ae700640600584d5d1280089aba25001135573ca00226ea80044cd54005d73ad112232230023756002640026aa02844646666aae7c008940208cd401ccc8848cc00400c008c018d55cea80118029aab9e500230043574400602a26ae840044488008488488cc00401000c488c8c8cccd5cd19b875001480008c8488c00800cc014d5d09aab9e500323333573466e1d40092002212200123263201333573802802602202026aae7540044dd5000919191999ab9a3370ea002900311909111180200298039aba135573ca00646666ae68cdc3a8012400846424444600400a60126ae84d55cf280211999ab9a3370ea006900111909111180080298039aba135573ca00a46666ae68cdc3a8022400046424444600600a6eb8d5d09aab9e500623263201333573802802602202001e01c26aae7540044dd5000919191999ab9a3370e6aae7540092000233221233001003002300535742a0046eb4d5d09aba2500223263200f33573802001e01a26aae7940044dd50009191999ab9a3370e6aae75400520002375c6ae84d55cf280111931900699ab9c00e00d00b13754002464646464646666ae68cdc3a800a401842444444400646666ae68cdc3a8012401442444444400846666ae68cdc3a801a40104664424444444660020120106eb8d5d0a8029bad357426ae8940148cccd5cd19b875004480188cc8848888888cc008024020dd71aba15007375c6ae84d5d1280391999ab9a3370ea00a900211991091111111980300480418061aba15009375c6ae84d5d1280491999ab9a3370ea00c900111909111111180380418069aba135573ca01646666ae68cdc3a803a400046424444444600a010601c6ae84d55cf280611931900b19ab9c01701601401301201101000f00e135573aa00826aae79400c4d55cf280109aab9e5001137540024646464646666ae68cdc3a800a4004466644424466600200a0080066eb4d5d0a8021bad35742a0066eb4d5d09aba2500323333573466e1d4009200023212230020033008357426aae7940188c98c803ccd5ce00800780680609aab9d5003135744a00226aae7940044dd5000919191999ab9a3370ea002900111909118008019bae357426aae79400c8cccd5cd19b875002480008c8488c00800cdd71aba135573ca008464c6401866ae700340300280244d55cea80089baa00112232323333573466e1d400520042122200123333573466e1d400920022350073006357426aae7940108cccd5cd19b87500348000848880088c98c8034cd5ce00700680580500489aab9d50011375400224244460060084646666ae68cdc3a800a4004400a46666ae68cdc3a80124000400a464c6401066ae700240200180144d55ce9baa0011220021220014984800524010350543100112323001001223300330020020011",
};

const week03homework1Datum = L.Data.Object({
  beneficiary1: L.Data.String,
  beneficiary2: L.Data.String,
  deadline: L.Data.BigInt,
});

async function onVestW04H1() {
  const ownPKH = await getCardanoPKH();
  console.log("Own PKH: " + ownPKH);

  const beneficiaryOption1 = document.getElementById("w04h1VestBeneficiary1");
  const beneficiaryWallet1 = beneficiaryOption1.value;
  const beneficiary1 = getPKH(beneficiaryWallet1);

  const beneficiaryOption2 = document.getElementById("w04h1VestBeneficiary2");
  const beneficiaryWallet2 = beneficiaryOption2.value;
  const beneficiary2 = getPKH(beneficiaryWallet2);

  const amountText = document.getElementById("w04h1VestAmountText");
  const amount = BigInt(parseFloat(amountText.value) * 1_000_000);

  const deadlineText = document.getElementById("w04h1VestDeadlineText");
  const deadline = BigInt(Date.parse(deadlineText.value));

  console.log("Beneficiary 1: " + beneficiary1);
  console.log("Beneficiary 2: " + beneficiary2);

  const week03homework1Address = lucid.utils.validatorToAddress(week03homework1Script);
  const d = {
    beneficiary1: beneficiary1,
    beneficiary2: beneficiary2,
    deadline: deadline,
  };
  const datum = L.Data.to(d, week03homework1Datum);
  const tx = await lucid
    .newTx()
    .payToContract(week03homework1Address, { inline: datum }, { lovelace: amount })
    .complete();

  const signedTx = await tx.sign().complete();
  await submitCardanoTx(signedTx);

  beneficiaryOption1.selectedIndex = "0";
  beneficiaryOption2.selectedIndex = "0";
  amountText.value = "";
  deadlineText.value = "";
}

async function onClaimW04H1() {
  const pkh = await getCardanoPKH();

  const referenceText = document.getElementById("w04h1ClaimReferenceText");
  const reference = referenceText.value;
  const chunks = reference.split("#");
  const txHash = chunks[0];
  const txIdx = parseInt(chunks[1]);

  // Find UTxO
  const week03homework1Address = lucid.utils.validatorToAddress(week03homework1Script);
  const utxos = await lucid.utxosAt(week03homework1Address);
  const utxo = [];
  for (const u of utxos) {
    if (u.txHash == txHash && u.outputIndex == txIdx) {
      utxo.push(u);
      break;
    }
  }
  if (utxo.length != 0) {
    const emptyConstr = new L.Constr(0, []); // Haskel Unit -- ()
    const emptyData = L.Data.to(emptyConstr); // redeemer

    const now = Date.now();
    const later = now + 3600_000; // +1hour

    const tx = await lucid
      .newTx()
      .collectFrom(utxo, emptyData)
      .attachSpendingValidator(week03homework1Script)
      .addSignerKey(pkh)
      .validFrom(now)
      .validTo(later)
      .complete();

    const signedTx = await tx.sign().complete();
    await submitCardanoTx(signedTx);

    referenceText.value = "";
  } else {
    console.log("UTxO not found");
  }
}

async function onVest() {
  const beneficiaryText = document.getElementById("vestBeneficiaryText");
  const beneficiaryAddress = beneficiaryText.value;
  const beneficiary = L.paymentCredentialOf(beneficiaryAddress).hash;
  const amountText = document.getElementById("vestAmountText");
  const amount = BigInt(parseInt(amountText.value));
  const deadlineText = document.getElementById("vestDeadlineText");
  const deadline = BigInt(Date.parse(deadlineText.value));

  const d = {
    beneficiary: beneficiary,
    deadline: deadline,
  };
  const datum = L.Data.to(d, VestingDatum);
  const tx = await lucid
    .newTx()
    .payToContract(vestingAddress, { inline: datum }, { lovelace: amount })
    .complete();
  signAndSubmitCardanoTx(tx);

  beneficiaryText.value = "";
  amountText.value = "";
  deadlineText.value = "";
}

async function onClaim() {
  const pkh = await getCardanoPKH();

  const referenceText = document.getElementById("claimReferenceText");
  const reference = referenceText.value;

  const utxo = await findUTxO(reference);
  if (utxo) {
    const tx = await lucid
      .newTx()
      .collectFrom([utxo.utxo], L.Data.to(new L.Constr(0, [])))
      .attachSpendingValidator(vestingScript)
      .addSignerKey(pkh)
      .validFrom(Number(utxo.datum.deadline))
      .complete();
    signAndSubmitCardanoTx(tx);
  } else {
    console.log("UTxO not found");
  }

  referenceText.value = "";
}

function onCopy(elt) {
  navigator.clipboard.writeText(
    document.getElementById(elt).firstChild.textContent
  );
}

window.L = L;
window.lucid = await loadCardano();
const vestingAddress = lucid.utils.validatorToAddress(vestingScript);

$(function () {
  $(".dtp").datetimepicker({
    minuteStep: 1,
    autoclose: true,
    format: "yyyy-mm-dd hh:ii",
  });
});

setStatus();
setInterval(setStatus, 5000);

document
  .getElementById("w04h1VestButton")
  .addEventListener("click", onVestW04H1);
document
  .getElementById("w04h1ClaimButton")
  .addEventListener("click", onClaimW04H1);

document.getElementById("vestButton").addEventListener("click", onVest);
document.getElementById("claimButton").addEventListener("click", onClaim);
document
  .getElementById("cardanoPKHButton")
  .addEventListener("click", () => onCopy("cardanoPKH"));
