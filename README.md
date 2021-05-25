# Beautysalon Novi

## Inhoudsopgave
*	[Versie](#versie)
*	[Auteur](#auteur)
*	[Inleiding](#inleiding)
*	[Licentie & copyright](#licentie-&-copyright)
*	[Benodigdheden en installatie](#Benodigdheden-en-installatie)
*	[NPM commando's](#npm-commands)
*	[Inloggen](#inloggen)

### Versie
*Versie 1.0*

### Auteur
Fide Alassi, studentnummer 800010530
[Hogeschool Novi](https://www.novi.nl/)

### Inleiding
In opdracht van Hogeschool Novi heb ik als HBO-ICT Software Development studente, de webapplicatie Beautysalon Novi in **React** programmeertaal ontwikkeld ten behoeve van de leerlijn Front End.
De webapplicatie bestaat uit:
1. **Klantenportaal**: bestemd voor bezoekers.
2. **Medewerkersportaal**: bestemd voor medewerkers.

De portalen bevatten de volgende pagina's:

Klantenportaal|Medewerkersportaal|Beschrijving functionaliteit
--------------|--------------|--------------
Startpagina| Startpagina| Bevat informatie over het bedrijf.
Over mij| Over mij| Bevat informatie over de leerling/ontwikkelaar.
Weer| Weer| Bevat een kaart met daarin de weersvoorspelling voor vandaag. Ook kan je hierin het weer van andere steden opzoeken.
Behandelingen| Behandelingen| Bevat een overzicht van de aangeboden behandelingen en producten met de bijhorende kosten.
About| About| Bevat het adres en openingstijden van de beautysalon en een Google Maps kaart waarin het adres is gemarkeerd.
Inloggen| Uitloggen| Na het inloggen met een geldige gebruikersnaam en wachtwoord wordt de pagina "Kassasysteem" geopend.  
&nbsp;| Kassasysteem| Is afgeschermd voor niet ingelogde gebruikers en wordt geopend na het inloggen op het bezoekersportaal. Deze pagina bevat een lijst met diverse items (behandelingen en producten). Na het aanvinken van de (checkbox) item(s) en een eventuele "vaste klanten korting", wordt er direct een totaalprijs berekend en getoond onderin de itemlijst.

**Screenshot Kassasysteem**

![Screenshot Kassasysteem](https://i.ibb.co/SKPZT5Q/Kassasysteem3.png) 

### Licentie & copyright
© Fidaa Alassi, Hogeschool Novi

### Benodigdheden en installatie
Om de webapplicatie en zijn code in te zien heb je een IDE (integrated development environment) sotware pakket nodig.
Dit project is in JetBrains Webstorm ontwikkeld en is hier dus het beste compatible mee. 
De hoofdfolder genaamd SalonManagerReact2 dient in de ontwikkelprogramma geimporteerd te worden om bij de code te kunnen.

**Benodigdheden**
* JetBrains Webstorm versie 2020.2 of hoger.
* Node.js

**Installatie/Importeer project in Webstorm**
1. Open Webstorm.
2. Druk op File > Open in het menu.
3. Browse naar de projectfolder en druk op de knop OK.
4. Typ in de geintegreerde Terminal `npm install` en druk op enter.
5. Zodra de packages zijn ingestalleerd, typ in de geintegreerde Terminal `npm start` en druk op enter. Hierbij wordt in de webbrowser de link http://localhost:3000 geopend. 
De webapplicatie is hierin zichtbaar.

### NPM commands
* `npm test`
* `npm run eject`

### Inloggen
Inloggegevens t.b.v. de pagina "Inloggen":
* E-mailadres: medewerker@beautysalon.nl
* Wachtwoord: banana
