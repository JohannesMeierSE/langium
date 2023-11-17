/******************************************************************************
 * This file was generated by langium-cli 2.1.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable */
import type { AstNode, Reference, ReferenceInfo, TypeMetaData } from '../../syntax-tree.js';
import { AbstractAstReflection } from '../../syntax-tree.js';

export const LangiumGrammarTerminals = {
    ID: /\^?[_a-zA-Z][\w_]*/,
    STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
    NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,
    RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,
    WS: /\s+/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/,
};

export type AbstractRule = ParserRule | TerminalRule;

export const AbstractRule = 'AbstractRule';

export function isAbstractRule(item: unknown): item is AbstractRule {
    return reflection.isInstance(item, AbstractRule);
}

export type AbstractType = Action | Interface | ParserRule | Type;

export const AbstractType = 'AbstractType';

export function isAbstractType(item: unknown): item is AbstractType {
    return reflection.isInstance(item, AbstractType);
}

export type Condition = BooleanLiteral | Conjunction | Disjunction | Negation | ParameterReference;

export const Condition = 'Condition';

export function isCondition(item: unknown): item is Condition {
    return reflection.isInstance(item, Condition);
}

export type FeatureName = 'current' | 'entry' | 'extends' | 'false' | 'fragment' | 'grammar' | 'hidden' | 'import' | 'infer' | 'infers' | 'interface' | 'returns' | 'terminal' | 'true' | 'type' | 'with' | PrimitiveType | string;

export function isFeatureName(item: unknown): item is FeatureName {
    return isPrimitiveType(item) || item === 'current' || item === 'entry' || item === 'extends' || item === 'false' || item === 'fragment' || item === 'grammar' || item === 'hidden' || item === 'import' || item === 'interface' || item === 'returns' || item === 'terminal' || item === 'true' || item === 'type' || item === 'infer' || item === 'infers' || item === 'with' || (typeof item === 'string' && (/\^?[_a-zA-Z][\w_]*/.test(item)));
}

export type PrimitiveType = 'Date' | 'bigint' | 'boolean' | 'number' | 'string';

export function isPrimitiveType(item: unknown): item is PrimitiveType {
    return item === 'string' || item === 'number' || item === 'boolean' || item === 'Date' || item === 'bigint';
}

export type TypeDefinition = ArrayType | ReferenceType | SimpleType | UnionType;

export const TypeDefinition = 'TypeDefinition';

export function isTypeDefinition(item: unknown): item is TypeDefinition {
    return reflection.isInstance(item, TypeDefinition);
}

export type ValueLiteral = ArrayLiteral | BooleanLiteral | NumberLiteral | StringLiteral;

export const ValueLiteral = 'ValueLiteral';

export function isValueLiteral(item: unknown): item is ValueLiteral {
    return reflection.isInstance(item, ValueLiteral);
}

export interface AbstractElement extends AstNode {
    readonly $type: 'AbstractElement' | 'Action' | 'Alternatives' | 'Assignment' | 'CharacterRange' | 'CrossReference' | 'EndOfFile' | 'Group' | 'Keyword' | 'NegatedToken' | 'RegexToken' | 'RuleCall' | 'TerminalAlternatives' | 'TerminalGroup' | 'TerminalRuleCall' | 'UnorderedGroup' | 'UntilToken' | 'Wildcard';
    cardinality?: '*' | '+' | '?'
    lookahead?: '?!' | '?='
}

export const AbstractElement = 'AbstractElement';

export function isAbstractElement(item: unknown): item is AbstractElement {
    return reflection.isInstance(item, AbstractElement);
}

export interface ArrayLiteral extends AstNode {
    readonly $container: ArrayLiteral | TypeAttribute;
    readonly $type: 'ArrayLiteral';
    elements: Array<ValueLiteral>
}

export const ArrayLiteral = 'ArrayLiteral';

export function isArrayLiteral(item: unknown): item is ArrayLiteral {
    return reflection.isInstance(item, ArrayLiteral);
}

export interface ArrayType extends AstNode {
    readonly $container: ArrayType | ReferenceType | Type | TypeAttribute | UnionType;
    readonly $type: 'ArrayType';
    elementType: TypeDefinition
}

export const ArrayType = 'ArrayType';

export function isArrayType(item: unknown): item is ArrayType {
    return reflection.isInstance(item, ArrayType);
}

export interface BooleanLiteral extends AstNode {
    readonly $container: ArrayLiteral | Conjunction | Disjunction | Group | NamedArgument | Negation | TypeAttribute;
    readonly $type: 'BooleanLiteral';
    true: boolean
}

export const BooleanLiteral = 'BooleanLiteral';

export function isBooleanLiteral(item: unknown): item is BooleanLiteral {
    return reflection.isInstance(item, BooleanLiteral);
}

export interface Conjunction extends AstNode {
    readonly $container: Conjunction | Disjunction | Group | NamedArgument | Negation;
    readonly $type: 'Conjunction';
    left: Condition
    right: Condition
}

export const Conjunction = 'Conjunction';

export function isConjunction(item: unknown): item is Conjunction {
    return reflection.isInstance(item, Conjunction);
}

export interface Disjunction extends AstNode {
    readonly $container: Conjunction | Disjunction | Group | NamedArgument | Negation;
    readonly $type: 'Disjunction';
    left: Condition
    right: Condition
}

export const Disjunction = 'Disjunction';

export function isDisjunction(item: unknown): item is Disjunction {
    return reflection.isInstance(item, Disjunction);
}

export interface Grammar extends AstNode {
    readonly $type: 'Grammar';
    definesHiddenTokens: boolean
    hiddenTokens: Array<Reference<AbstractRule>>
    imports: Array<GrammarImport>
    interfaces: Array<Interface>
    isDeclared: boolean
    name?: string
    rules: Array<AbstractRule>
    types: Array<Type>
    usedGrammars: Array<Reference<Grammar>>
}

export const Grammar = 'Grammar';

export function isGrammar(item: unknown): item is Grammar {
    return reflection.isInstance(item, Grammar);
}

export interface GrammarImport extends AstNode {
    readonly $container: Grammar;
    readonly $type: 'GrammarImport';
    path: string
}

export const GrammarImport = 'GrammarImport';

export function isGrammarImport(item: unknown): item is GrammarImport {
    return reflection.isInstance(item, GrammarImport);
}

export interface InferredType extends AstNode {
    readonly $container: Action | ParserRule;
    readonly $type: 'InferredType';
    name: string
}

export const InferredType = 'InferredType';

export function isInferredType(item: unknown): item is InferredType {
    return reflection.isInstance(item, InferredType);
}

export interface Interface extends AstNode {
    readonly $container: Grammar;
    readonly $type: 'Interface';
    attributes: Array<TypeAttribute>
    name: string
    superTypes: Array<Reference<AbstractType>>
}

export const Interface = 'Interface';

export function isInterface(item: unknown): item is Interface {
    return reflection.isInstance(item, Interface);
}

export interface NamedArgument extends AstNode {
    readonly $container: RuleCall;
    readonly $type: 'NamedArgument';
    calledByName: boolean
    parameter?: Reference<Parameter>
    value: Condition
}

export const NamedArgument = 'NamedArgument';

export function isNamedArgument(item: unknown): item is NamedArgument {
    return reflection.isInstance(item, NamedArgument);
}

export interface Negation extends AstNode {
    readonly $container: Conjunction | Disjunction | Group | NamedArgument | Negation;
    readonly $type: 'Negation';
    value: Condition
}

export const Negation = 'Negation';

export function isNegation(item: unknown): item is Negation {
    return reflection.isInstance(item, Negation);
}

export interface NumberLiteral extends AstNode {
    readonly $container: ArrayLiteral | TypeAttribute;
    readonly $type: 'NumberLiteral';
    value: number
}

export const NumberLiteral = 'NumberLiteral';

export function isNumberLiteral(item: unknown): item is NumberLiteral {
    return reflection.isInstance(item, NumberLiteral);
}

export interface Parameter extends AstNode {
    readonly $container: ParserRule;
    readonly $type: 'Parameter';
    name: string
}

export const Parameter = 'Parameter';

export function isParameter(item: unknown): item is Parameter {
    return reflection.isInstance(item, Parameter);
}

export interface ParameterReference extends AstNode {
    readonly $container: Conjunction | Disjunction | Group | NamedArgument | Negation;
    readonly $type: 'ParameterReference';
    parameter: Reference<Parameter>
}

export const ParameterReference = 'ParameterReference';

export function isParameterReference(item: unknown): item is ParameterReference {
    return reflection.isInstance(item, ParameterReference);
}

export interface ParserRule extends AstNode {
    readonly $container: Grammar;
    readonly $type: 'ParserRule';
    dataType?: PrimitiveType
    definesHiddenTokens: boolean
    definition: AbstractElement
    entry: boolean
    fragment: boolean
    hiddenTokens: Array<Reference<AbstractRule>>
    inferredType?: InferredType
    name: string
    parameters: Array<Parameter>
    returnType?: Reference<AbstractType>
    wildcard: boolean
}

export const ParserRule = 'ParserRule';

export function isParserRule(item: unknown): item is ParserRule {
    return reflection.isInstance(item, ParserRule);
}

export interface ReferenceType extends AstNode {
    readonly $container: ArrayType | ReferenceType | Type | TypeAttribute | UnionType;
    readonly $type: 'ReferenceType';
    referenceType: TypeDefinition
}

export const ReferenceType = 'ReferenceType';

export function isReferenceType(item: unknown): item is ReferenceType {
    return reflection.isInstance(item, ReferenceType);
}

export interface ReturnType extends AstNode {
    readonly $container: TerminalRule;
    readonly $type: 'ReturnType';
    name: PrimitiveType | string
}

export const ReturnType = 'ReturnType';

export function isReturnType(item: unknown): item is ReturnType {
    return reflection.isInstance(item, ReturnType);
}

export interface SimpleType extends AstNode {
    readonly $container: ArrayType | ReferenceType | Type | TypeAttribute | UnionType;
    readonly $type: 'SimpleType';
    primitiveType?: PrimitiveType
    stringType?: string
    typeRef?: Reference<AbstractType>
}

export const SimpleType = 'SimpleType';

export function isSimpleType(item: unknown): item is SimpleType {
    return reflection.isInstance(item, SimpleType);
}

export interface StringLiteral extends AstNode {
    readonly $container: ArrayLiteral | TypeAttribute;
    readonly $type: 'StringLiteral';
    value: string
}

export const StringLiteral = 'StringLiteral';

export function isStringLiteral(item: unknown): item is StringLiteral {
    return reflection.isInstance(item, StringLiteral);
}

export interface TerminalRule extends AstNode {
    readonly $container: Grammar;
    readonly $type: 'TerminalRule';
    definition: AbstractElement
    fragment: boolean
    hidden: boolean
    name: string
    type?: ReturnType
}

export const TerminalRule = 'TerminalRule';

export function isTerminalRule(item: unknown): item is TerminalRule {
    return reflection.isInstance(item, TerminalRule);
}

export interface Type extends AstNode {
    readonly $container: Grammar;
    readonly $type: 'Type';
    name: string
    type: TypeDefinition
}

export const Type = 'Type';

export function isType(item: unknown): item is Type {
    return reflection.isInstance(item, Type);
}

export interface TypeAttribute extends AstNode {
    readonly $container: Interface;
    readonly $type: 'TypeAttribute';
    defaultValue?: ValueLiteral
    isOptional: boolean
    name: FeatureName
    type: TypeDefinition
}

export const TypeAttribute = 'TypeAttribute';

export function isTypeAttribute(item: unknown): item is TypeAttribute {
    return reflection.isInstance(item, TypeAttribute);
}

export interface UnionType extends AstNode {
    readonly $container: ArrayType | ReferenceType | Type | TypeAttribute | UnionType;
    readonly $type: 'UnionType';
    types: Array<TypeDefinition>
}

export const UnionType = 'UnionType';

export function isUnionType(item: unknown): item is UnionType {
    return reflection.isInstance(item, UnionType);
}

export interface Action extends AbstractElement {
    readonly $type: 'Action';
    feature?: FeatureName
    inferredType?: InferredType
    operator?: '+=' | '='
    type?: Reference<AbstractType>
}

export const Action = 'Action';

export function isAction(item: unknown): item is Action {
    return reflection.isInstance(item, Action);
}

export interface Alternatives extends AbstractElement {
    readonly $type: 'Alternatives';
    elements: Array<AbstractElement>
}

export const Alternatives = 'Alternatives';

export function isAlternatives(item: unknown): item is Alternatives {
    return reflection.isInstance(item, Alternatives);
}

export interface Assignment extends AbstractElement {
    readonly $type: 'Assignment';
    feature: FeatureName
    operator: '+=' | '=' | '?='
    terminal: AbstractElement
}

export const Assignment = 'Assignment';

export function isAssignment(item: unknown): item is Assignment {
    return reflection.isInstance(item, Assignment);
}

export interface CharacterRange extends AbstractElement {
    readonly $type: 'CharacterRange';
    left: Keyword
    right?: Keyword
}

export const CharacterRange = 'CharacterRange';

export function isCharacterRange(item: unknown): item is CharacterRange {
    return reflection.isInstance(item, CharacterRange);
}

export interface CrossReference extends AbstractElement {
    readonly $type: 'CrossReference';
    deprecatedSyntax: boolean
    terminal?: AbstractElement
    type: Reference<AbstractType>
}

export const CrossReference = 'CrossReference';

export function isCrossReference(item: unknown): item is CrossReference {
    return reflection.isInstance(item, CrossReference);
}

export interface EndOfFile extends AbstractElement {
    readonly $type: 'EndOfFile';
}

export const EndOfFile = 'EndOfFile';

export function isEndOfFile(item: unknown): item is EndOfFile {
    return reflection.isInstance(item, EndOfFile);
}

export interface Group extends AbstractElement {
    readonly $type: 'Group';
    elements: Array<AbstractElement>
    guardCondition?: Condition
}

export const Group = 'Group';

export function isGroup(item: unknown): item is Group {
    return reflection.isInstance(item, Group);
}

export interface Keyword extends AbstractElement {
    readonly $container: CharacterRange;
    readonly $type: 'Keyword';
    value: string
}

export const Keyword = 'Keyword';

export function isKeyword(item: unknown): item is Keyword {
    return reflection.isInstance(item, Keyword);
}

export interface NegatedToken extends AbstractElement {
    readonly $type: 'NegatedToken';
    terminal: AbstractElement
}

export const NegatedToken = 'NegatedToken';

export function isNegatedToken(item: unknown): item is NegatedToken {
    return reflection.isInstance(item, NegatedToken);
}

export interface RegexToken extends AbstractElement {
    readonly $type: 'RegexToken';
    regex: string
}

export const RegexToken = 'RegexToken';

export function isRegexToken(item: unknown): item is RegexToken {
    return reflection.isInstance(item, RegexToken);
}

export interface RuleCall extends AbstractElement {
    readonly $type: 'RuleCall';
    arguments: Array<NamedArgument>
    rule: Reference<AbstractRule>
}

export const RuleCall = 'RuleCall';

export function isRuleCall(item: unknown): item is RuleCall {
    return reflection.isInstance(item, RuleCall);
}

export interface TerminalAlternatives extends AbstractElement {
    readonly $type: 'TerminalAlternatives';
    elements: Array<AbstractElement>
}

export const TerminalAlternatives = 'TerminalAlternatives';

export function isTerminalAlternatives(item: unknown): item is TerminalAlternatives {
    return reflection.isInstance(item, TerminalAlternatives);
}

export interface TerminalGroup extends AbstractElement {
    readonly $type: 'TerminalGroup';
    elements: Array<AbstractElement>
}

export const TerminalGroup = 'TerminalGroup';

export function isTerminalGroup(item: unknown): item is TerminalGroup {
    return reflection.isInstance(item, TerminalGroup);
}

export interface TerminalRuleCall extends AbstractElement {
    readonly $type: 'TerminalRuleCall';
    rule: Reference<TerminalRule>
}

export const TerminalRuleCall = 'TerminalRuleCall';

export function isTerminalRuleCall(item: unknown): item is TerminalRuleCall {
    return reflection.isInstance(item, TerminalRuleCall);
}

export interface UnorderedGroup extends AbstractElement {
    readonly $type: 'UnorderedGroup';
    elements: Array<AbstractElement>
}

export const UnorderedGroup = 'UnorderedGroup';

export function isUnorderedGroup(item: unknown): item is UnorderedGroup {
    return reflection.isInstance(item, UnorderedGroup);
}

export interface UntilToken extends AbstractElement {
    readonly $type: 'UntilToken';
    terminal: AbstractElement
}

export const UntilToken = 'UntilToken';

export function isUntilToken(item: unknown): item is UntilToken {
    return reflection.isInstance(item, UntilToken);
}

export interface Wildcard extends AbstractElement {
    readonly $type: 'Wildcard';
}

export const Wildcard = 'Wildcard';

export function isWildcard(item: unknown): item is Wildcard {
    return reflection.isInstance(item, Wildcard);
}

export type LangiumGrammarAstType = {
    AbstractElement: AbstractElement
    AbstractRule: AbstractRule
    AbstractType: AbstractType
    Action: Action
    Alternatives: Alternatives
    ArrayLiteral: ArrayLiteral
    ArrayType: ArrayType
    Assignment: Assignment
    BooleanLiteral: BooleanLiteral
    CharacterRange: CharacterRange
    Condition: Condition
    Conjunction: Conjunction
    CrossReference: CrossReference
    Disjunction: Disjunction
    EndOfFile: EndOfFile
    Grammar: Grammar
    GrammarImport: GrammarImport
    Group: Group
    InferredType: InferredType
    Interface: Interface
    Keyword: Keyword
    NamedArgument: NamedArgument
    NegatedToken: NegatedToken
    Negation: Negation
    NumberLiteral: NumberLiteral
    Parameter: Parameter
    ParameterReference: ParameterReference
    ParserRule: ParserRule
    ReferenceType: ReferenceType
    RegexToken: RegexToken
    ReturnType: ReturnType
    RuleCall: RuleCall
    SimpleType: SimpleType
    StringLiteral: StringLiteral
    TerminalAlternatives: TerminalAlternatives
    TerminalGroup: TerminalGroup
    TerminalRule: TerminalRule
    TerminalRuleCall: TerminalRuleCall
    Type: Type
    TypeAttribute: TypeAttribute
    TypeDefinition: TypeDefinition
    UnionType: UnionType
    UnorderedGroup: UnorderedGroup
    UntilToken: UntilToken
    ValueLiteral: ValueLiteral
    Wildcard: Wildcard
}

export class LangiumGrammarAstReflection extends AbstractAstReflection {

    getAllTypes(): string[] {
        return ['AbstractElement', 'AbstractRule', 'AbstractType', 'Action', 'Alternatives', 'ArrayLiteral', 'ArrayType', 'Assignment', 'BooleanLiteral', 'CharacterRange', 'Condition', 'Conjunction', 'CrossReference', 'Disjunction', 'EndOfFile', 'Grammar', 'GrammarImport', 'Group', 'InferredType', 'Interface', 'Keyword', 'NamedArgument', 'NegatedToken', 'Negation', 'NumberLiteral', 'Parameter', 'ParameterReference', 'ParserRule', 'ReferenceType', 'RegexToken', 'ReturnType', 'RuleCall', 'SimpleType', 'StringLiteral', 'TerminalAlternatives', 'TerminalGroup', 'TerminalRule', 'TerminalRuleCall', 'Type', 'TypeAttribute', 'TypeDefinition', 'UnionType', 'UnorderedGroup', 'UntilToken', 'ValueLiteral', 'Wildcard'];
    }

    protected override computeIsSubtype(subtype: string, supertype: string): boolean {
        switch (subtype) {
            case Action: {
                return this.isSubtype(AbstractElement, supertype) || this.isSubtype(AbstractType, supertype);
            }
            case Alternatives:
            case Assignment:
            case CharacterRange:
            case CrossReference:
            case EndOfFile:
            case Group:
            case Keyword:
            case NegatedToken:
            case RegexToken:
            case RuleCall:
            case TerminalAlternatives:
            case TerminalGroup:
            case TerminalRuleCall:
            case UnorderedGroup:
            case UntilToken:
            case Wildcard: {
                return this.isSubtype(AbstractElement, supertype);
            }
            case ArrayLiteral:
            case NumberLiteral:
            case StringLiteral: {
                return this.isSubtype(ValueLiteral, supertype);
            }
            case ArrayType:
            case ReferenceType:
            case SimpleType:
            case UnionType: {
                return this.isSubtype(TypeDefinition, supertype);
            }
            case BooleanLiteral: {
                return this.isSubtype(Condition, supertype) || this.isSubtype(ValueLiteral, supertype);
            }
            case Conjunction:
            case Disjunction:
            case Negation:
            case ParameterReference: {
                return this.isSubtype(Condition, supertype);
            }
            case Interface:
            case Type: {
                return this.isSubtype(AbstractType, supertype);
            }
            case ParserRule: {
                return this.isSubtype(AbstractRule, supertype) || this.isSubtype(AbstractType, supertype);
            }
            case TerminalRule: {
                return this.isSubtype(AbstractRule, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'Action:type':
            case 'CrossReference:type':
            case 'Interface:superTypes':
            case 'ParserRule:returnType':
            case 'SimpleType:typeRef': {
                return AbstractType;
            }
            case 'Grammar:hiddenTokens':
            case 'ParserRule:hiddenTokens':
            case 'RuleCall:rule': {
                return AbstractRule;
            }
            case 'Grammar:usedGrammars': {
                return Grammar;
            }
            case 'NamedArgument:parameter':
            case 'ParameterReference:parameter': {
                return Parameter;
            }
            case 'TerminalRuleCall:rule': {
                return TerminalRule;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case 'AbstractElement': {
                return {
                    name: 'AbstractElement',
                    properties: [
                        { name: 'cardinality' },
                        { name: 'lookahead' }
                    ]
                };
            }
            case 'ArrayLiteral': {
                return {
                    name: 'ArrayLiteral',
                    properties: [
                        { name: 'elements', defaultValue: [] }
                    ]
                };
            }
            case 'ArrayType': {
                return {
                    name: 'ArrayType',
                    properties: [
                        { name: 'elementType' }
                    ]
                };
            }
            case 'BooleanLiteral': {
                return {
                    name: 'BooleanLiteral',
                    properties: [
                        { name: 'true', defaultValue: false }
                    ]
                };
            }
            case 'Conjunction': {
                return {
                    name: 'Conjunction',
                    properties: [
                        { name: 'left' },
                        { name: 'right' }
                    ]
                };
            }
            case 'Disjunction': {
                return {
                    name: 'Disjunction',
                    properties: [
                        { name: 'left' },
                        { name: 'right' }
                    ]
                };
            }
            case 'Grammar': {
                return {
                    name: 'Grammar',
                    properties: [
                        { name: 'definesHiddenTokens', defaultValue: false },
                        { name: 'hiddenTokens', defaultValue: [] },
                        { name: 'imports', defaultValue: [] },
                        { name: 'interfaces', defaultValue: [] },
                        { name: 'isDeclared', defaultValue: false },
                        { name: 'name' },
                        { name: 'rules', defaultValue: [] },
                        { name: 'types', defaultValue: [] },
                        { name: 'usedGrammars', defaultValue: [] }
                    ]
                };
            }
            case 'GrammarImport': {
                return {
                    name: 'GrammarImport',
                    properties: [
                        { name: 'path' }
                    ]
                };
            }
            case 'InferredType': {
                return {
                    name: 'InferredType',
                    properties: [
                        { name: 'name' }
                    ]
                };
            }
            case 'Interface': {
                return {
                    name: 'Interface',
                    properties: [
                        { name: 'attributes', defaultValue: [] },
                        { name: 'name' },
                        { name: 'superTypes', defaultValue: [] }
                    ]
                };
            }
            case 'NamedArgument': {
                return {
                    name: 'NamedArgument',
                    properties: [
                        { name: 'calledByName', defaultValue: false },
                        { name: 'parameter' },
                        { name: 'value' }
                    ]
                };
            }
            case 'Negation': {
                return {
                    name: 'Negation',
                    properties: [
                        { name: 'value' }
                    ]
                };
            }
            case 'NumberLiteral': {
                return {
                    name: 'NumberLiteral',
                    properties: [
                        { name: 'value' }
                    ]
                };
            }
            case 'Parameter': {
                return {
                    name: 'Parameter',
                    properties: [
                        { name: 'name' }
                    ]
                };
            }
            case 'ParameterReference': {
                return {
                    name: 'ParameterReference',
                    properties: [
                        { name: 'parameter' }
                    ]
                };
            }
            case 'ParserRule': {
                return {
                    name: 'ParserRule',
                    properties: [
                        { name: 'dataType' },
                        { name: 'definesHiddenTokens', defaultValue: false },
                        { name: 'definition' },
                        { name: 'entry', defaultValue: false },
                        { name: 'fragment', defaultValue: false },
                        { name: 'hiddenTokens', defaultValue: [] },
                        { name: 'inferredType' },
                        { name: 'name' },
                        { name: 'parameters', defaultValue: [] },
                        { name: 'returnType' },
                        { name: 'wildcard', defaultValue: false }
                    ]
                };
            }
            case 'ReferenceType': {
                return {
                    name: 'ReferenceType',
                    properties: [
                        { name: 'referenceType' }
                    ]
                };
            }
            case 'ReturnType': {
                return {
                    name: 'ReturnType',
                    properties: [
                        { name: 'name' }
                    ]
                };
            }
            case 'SimpleType': {
                return {
                    name: 'SimpleType',
                    properties: [
                        { name: 'primitiveType' },
                        { name: 'stringType' },
                        { name: 'typeRef' }
                    ]
                };
            }
            case 'StringLiteral': {
                return {
                    name: 'StringLiteral',
                    properties: [
                        { name: 'value' }
                    ]
                };
            }
            case 'TerminalRule': {
                return {
                    name: 'TerminalRule',
                    properties: [
                        { name: 'definition' },
                        { name: 'fragment', defaultValue: false },
                        { name: 'hidden', defaultValue: false },
                        { name: 'name' },
                        { name: 'type' }
                    ]
                };
            }
            case 'Type': {
                return {
                    name: 'Type',
                    properties: [
                        { name: 'name' },
                        { name: 'type' }
                    ]
                };
            }
            case 'TypeAttribute': {
                return {
                    name: 'TypeAttribute',
                    properties: [
                        { name: 'defaultValue' },
                        { name: 'isOptional', defaultValue: false },
                        { name: 'name' },
                        { name: 'type' }
                    ]
                };
            }
            case 'UnionType': {
                return {
                    name: 'UnionType',
                    properties: [
                        { name: 'types', defaultValue: [] }
                    ]
                };
            }
            case 'Action': {
                return {
                    name: 'Action',
                    properties: [
                        { name: 'feature' },
                        { name: 'inferredType' },
                        { name: 'operator' },
                        { name: 'type' }
                    ]
                };
            }
            case 'Alternatives': {
                return {
                    name: 'Alternatives',
                    properties: [
                        { name: 'elements', defaultValue: [] }
                    ]
                };
            }
            case 'Assignment': {
                return {
                    name: 'Assignment',
                    properties: [
                        { name: 'feature' },
                        { name: 'operator' },
                        { name: 'terminal' }
                    ]
                };
            }
            case 'CharacterRange': {
                return {
                    name: 'CharacterRange',
                    properties: [
                        { name: 'left' },
                        { name: 'right' }
                    ]
                };
            }
            case 'CrossReference': {
                return {
                    name: 'CrossReference',
                    properties: [
                        { name: 'deprecatedSyntax', defaultValue: false },
                        { name: 'terminal' },
                        { name: 'type' }
                    ]
                };
            }
            case 'Group': {
                return {
                    name: 'Group',
                    properties: [
                        { name: 'elements', defaultValue: [] },
                        { name: 'guardCondition' }
                    ]
                };
            }
            case 'Keyword': {
                return {
                    name: 'Keyword',
                    properties: [
                        { name: 'value' }
                    ]
                };
            }
            case 'NegatedToken': {
                return {
                    name: 'NegatedToken',
                    properties: [
                        { name: 'terminal' }
                    ]
                };
            }
            case 'RegexToken': {
                return {
                    name: 'RegexToken',
                    properties: [
                        { name: 'regex' }
                    ]
                };
            }
            case 'RuleCall': {
                return {
                    name: 'RuleCall',
                    properties: [
                        { name: 'arguments', defaultValue: [] },
                        { name: 'rule' }
                    ]
                };
            }
            case 'TerminalAlternatives': {
                return {
                    name: 'TerminalAlternatives',
                    properties: [
                        { name: 'elements', defaultValue: [] }
                    ]
                };
            }
            case 'TerminalGroup': {
                return {
                    name: 'TerminalGroup',
                    properties: [
                        { name: 'elements', defaultValue: [] }
                    ]
                };
            }
            case 'TerminalRuleCall': {
                return {
                    name: 'TerminalRuleCall',
                    properties: [
                        { name: 'rule' }
                    ]
                };
            }
            case 'UnorderedGroup': {
                return {
                    name: 'UnorderedGroup',
                    properties: [
                        { name: 'elements', defaultValue: [] }
                    ]
                };
            }
            case 'UntilToken': {
                return {
                    name: 'UntilToken',
                    properties: [
                        { name: 'terminal' }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    properties: []
                };
            }
        }
    }
}

export const reflection = new LangiumGrammarAstReflection();