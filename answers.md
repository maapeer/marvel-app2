#git

1- Quel est l'intérêt de commiter régulièrement et de manière atomique ?
L'intérêt de commiter régulièrement nous permet de ne jamais perdre notre travail. C'est d'autant plus important en travail d'équipe?

2- A quoi sert une branche de type feature dans un développement logiciel de type git flow ?
Une branche de type feature va permettre de tester une nouvelle fonctionnalité du projet à partir de la branche develop.

3- Quelle est la différence entre une branche main et une branche develop ?
La branche main est considérée comme la branche "propre" alors que la develop est la branche en cours d'utilisation qui permet de réaliser les test.

4- Quelle est la différence entre git add, git commit et git push ?
Le git add permet de préparer les modifications que nous avons apportées sur les fichiers pour le prochain commit.
Le git commit permet d'enregistrer les modifications dans le dépôt local.
Le git push est l'étape finale, il permet d'envoyer tout ce qui a été enregistré sur le dépôt distant (github)


#github

5- Quel est l'intérêt d'une protection de branche ?
L'intérêt d'avoir une protection de branche va permettre notamment d'empecher les commits directs ou les suppressions accidentelles. Cela permet donc de protéger le travail réaliser et minimise la perte accidentelle.

6- Quel est l'intérêt d'une pull request ?
Le principal intérêt de la pull request va être son importance dans le travail en équipe. De plusn, elles exécutent des tests lorsque nous les lançons.

#versionning

7- Dans quel cas passer d'une version 1.0.0 à 1.0.1 ?
Le passage d'une version 1.0.0 à une version 1.0.1 signifie que uniquement les bugs ont été corrigés. La version est donc la même mais sans les bugs.

8- Dans quel cas passer d'une version 1.0.0 à 1.1.0 ?
le passage d'une version 1.0.0 à 1.1.0 signifie que des changements mineurs ont été mis en place. Pour les  changement majeurs, la version serait passé à la 2.0.0.

9- A quoi sert une version release candidate ?
Cela signifie que nous allons tester cette version avant de la mettre en production. Si cette version est validée, nous allons la mettre en production.

#test

10- Quel est l'intérêt des tests unitaires ?
Les test unitaires permettent de détecter certains bugs. Ils permettent aussi en quelque sorte d'améliorer la qualité de notre code.