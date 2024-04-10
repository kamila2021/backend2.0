'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-2f6f95e4a49ca9e450577bcb9517a89d7fa3f4e208687b5165f3fc11081c8c7b801960d8557c82d07b6e2faae5c030ec2f30db85b1bc155bd6738ece7a5ad273"' : 'data-bs-target="#xs-controllers-links-module-AppModule-2f6f95e4a49ca9e450577bcb9517a89d7fa3f4e208687b5165f3fc11081c8c7b801960d8557c82d07b6e2faae5c030ec2f30db85b1bc155bd6738ece7a5ad273"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-2f6f95e4a49ca9e450577bcb9517a89d7fa3f4e208687b5165f3fc11081c8c7b801960d8557c82d07b6e2faae5c030ec2f30db85b1bc155bd6738ece7a5ad273"' :
                                            'id="xs-controllers-links-module-AppModule-2f6f95e4a49ca9e450577bcb9517a89d7fa3f4e208687b5165f3fc11081c8c7b801960d8557c82d07b6e2faae5c030ec2f30db85b1bc155bd6738ece7a5ad273"' }>
                                            <li class="link">
                                                <a href="controllers/ApiController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-2f6f95e4a49ca9e450577bcb9517a89d7fa3f4e208687b5165f3fc11081c8c7b801960d8557c82d07b6e2faae5c030ec2f30db85b1bc155bd6738ece7a5ad273"' : 'data-bs-target="#xs-injectables-links-module-AppModule-2f6f95e4a49ca9e450577bcb9517a89d7fa3f4e208687b5165f3fc11081c8c7b801960d8557c82d07b6e2faae5c030ec2f30db85b1bc155bd6738ece7a5ad273"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2f6f95e4a49ca9e450577bcb9517a89d7fa3f4e208687b5165f3fc11081c8c7b801960d8557c82d07b6e2faae5c030ec2f30db85b1bc155bd6738ece7a5ad273"' :
                                        'id="xs-injectables-links-module-AppModule-2f6f95e4a49ca9e450577bcb9517a89d7fa3f4e208687b5165f3fc11081c8c7b801960d8557c82d07b6e2faae5c030ec2f30db85b1bc155bd6738ece7a5ad273"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-e2bdd1a22074bcd82e5f19dd8514e2382fc0f53614d63855371880895fe92a9e2736530d6716ff86e81286f4a1329e60c230c153ace953cf3447fb234916d552"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-e2bdd1a22074bcd82e5f19dd8514e2382fc0f53614d63855371880895fe92a9e2736530d6716ff86e81286f4a1329e60c230c153ace953cf3447fb234916d552"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-e2bdd1a22074bcd82e5f19dd8514e2382fc0f53614d63855371880895fe92a9e2736530d6716ff86e81286f4a1329e60c230c153ace953cf3447fb234916d552"' :
                                            'id="xs-controllers-links-module-AuthModule-e2bdd1a22074bcd82e5f19dd8514e2382fc0f53614d63855371880895fe92a9e2736530d6716ff86e81286f4a1329e60c230c153ace953cf3447fb234916d552"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-e2bdd1a22074bcd82e5f19dd8514e2382fc0f53614d63855371880895fe92a9e2736530d6716ff86e81286f4a1329e60c230c153ace953cf3447fb234916d552"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-e2bdd1a22074bcd82e5f19dd8514e2382fc0f53614d63855371880895fe92a9e2736530d6716ff86e81286f4a1329e60c230c153ace953cf3447fb234916d552"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e2bdd1a22074bcd82e5f19dd8514e2382fc0f53614d63855371880895fe92a9e2736530d6716ff86e81286f4a1329e60c230c153ace953cf3447fb234916d552"' :
                                        'id="xs-injectables-links-module-AuthModule-e2bdd1a22074bcd82e5f19dd8514e2382fc0f53614d63855371880895fe92a9e2736530d6716ff86e81286f4a1329e60c230c153ace953cf3447fb234916d552"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-2e436aeb5b651d9a29cb0de1288669cb43ec3ace800e69f666a2f661c1a163d2d3319c61f9036e5f4fe5d4acba1741c833776a462e32944501fff8c681132793"' : 'data-bs-target="#xs-controllers-links-module-UserModule-2e436aeb5b651d9a29cb0de1288669cb43ec3ace800e69f666a2f661c1a163d2d3319c61f9036e5f4fe5d4acba1741c833776a462e32944501fff8c681132793"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-2e436aeb5b651d9a29cb0de1288669cb43ec3ace800e69f666a2f661c1a163d2d3319c61f9036e5f4fe5d4acba1741c833776a462e32944501fff8c681132793"' :
                                            'id="xs-controllers-links-module-UserModule-2e436aeb5b651d9a29cb0de1288669cb43ec3ace800e69f666a2f661c1a163d2d3319c61f9036e5f4fe5d4acba1741c833776a462e32944501fff8c681132793"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-2e436aeb5b651d9a29cb0de1288669cb43ec3ace800e69f666a2f661c1a163d2d3319c61f9036e5f4fe5d4acba1741c833776a462e32944501fff8c681132793"' : 'data-bs-target="#xs-injectables-links-module-UserModule-2e436aeb5b651d9a29cb0de1288669cb43ec3ace800e69f666a2f661c1a163d2d3319c61f9036e5f4fe5d4acba1741c833776a462e32944501fff8c681132793"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-2e436aeb5b651d9a29cb0de1288669cb43ec3ace800e69f666a2f661c1a163d2d3319c61f9036e5f4fe5d4acba1741c833776a462e32944501fff8c681132793"' :
                                        'id="xs-injectables-links-module-UserModule-2e436aeb5b651d9a29cb0de1288669cb43ec3ace800e69f666a2f661c1a163d2d3319c61f9036e5f4fe5d4acba1741c833776a462e32944501fff8c681132793"' }>
                                        <li class="link">
                                            <a href="injectables/UserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateUserDTO.html" data-type="entity-link" >CreateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDTO.html" data-type="entity-link" >UpdateUserDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});