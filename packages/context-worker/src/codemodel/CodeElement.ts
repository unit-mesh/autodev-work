import { PositionElement } from './PositionElement';
import { LanguageIdentifier } from "../base/common/languages/languages";
import { Point, TextRange } from "../code-search/scope-graph/model/TextRange";

export interface CodeFile extends CodeElement {
	name: string;
	filepath: string;
	language: LanguageIdentifier;
	path?: string;
	package: string;
	imports: string[];
	classes: CodeStructure[];
	functions?: CodeFunction[];
}

export enum StructureType {
	Class = 'class',
	Interface = 'interface',
	Enum = 'enum',
	Struct = 'struct',
	Annotation = 'annotation',
	Trait = 'trait',
}

export interface CodeStructure extends PositionElement, CodeElement {
	name: string;
	// like a package, `com.example.ExampleClass` is the canonical name
	canonicalName: string;
	type: StructureType;
	package: string;
	extends?: string[];
	implements: string[];
	constant?: CodeVariable[];
	fields?: CodeVariable[];
	// in some languages, functions and methods are different names
	methods: CodeFunction[];
	/// for nested classes
	classes?: CodeStructure[];
	// class annotations for languages like Java
	annotations?: { name: string; keyValues: { key: string; value: string }[] }[];
	start: CodePosition;
	end: CodePosition;
}

export interface CodeFunction extends PositionElement, CodeElement {
	name: string;
	vars: CodeVariable[];
	returnType?: string;
	start: CodePosition;
	end: CodePosition;
	parameters?: {
		name: string;
		type: string;
	}[];
	modifiers?: string;
	// method annotations for languages like Java
	annotations?: { name: string; keyValues: { key: string; value: string }[] }[];
}

export interface CodeVariable extends CodeElement, PositionElement {
	name: string;
	type: string;
	isSystemType?: boolean;
}

export interface CodeElement {
	name: string;
}

export interface CodePosition {
	row: number;
	column: number;
}

export function functionToRange(element: CodeFunction): TextRange {
	const startPoint: Point = { line: element.start.row, column: element.start.column, byte: 0 };
	const endPoint: Point = { line: element.end.row, column: element.end.column, byte: 0 };
	return new TextRange(startPoint, endPoint, '');
}
