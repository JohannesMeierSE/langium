grammar DomainModel
hidden(WS)

Domainmodel:
    {Domainmodel}
    (elements+=AbstractElement)*;

AbstractElement:
    PackageDeclaration | Type;

PackageDeclaration:
    'package' name=QualifiedName '{'
        (elements+=AbstractElement)*
    '}';

Type:
    DataType | Entity;

DataType:
    'datatype' name=ID;

Entity:
    'entity' name=ID ('extends' superType=[Entity|QualifiedName])? '{'
        (features+=Feature)*
    '}';

Feature:
    (many?='many')? name=ID ':' type=[Type|QualifiedName];

QualifiedName returns string:
    ID ('.' ID)*;

terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal INT returns number: /[0-9]+/;
terminal STRING: /"[^"]*"|'[^']*'/;