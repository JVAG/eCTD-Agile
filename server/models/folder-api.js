'use strict'
var express = require('express');

var XMLMapping = require('../models/xmlmap-model');

var ClearCollection = function(){
    return XMLMapping.remove({});
};
module.exports.ClearCollection = ClearCollection;

var InsertAll = function(arr){
    return XMLMapping.insertMany(arr);
};
module.exports.InsertAll = InsertAll;

module.exports.GetXmlMappings = function(arr){
    return XMLMapping.find();
};


function createXMLMapping(){

    function FolderData(title, element){
        this.element = element;
        this.title = title;
    }
    
    let xmlmap = {};
    xmlmap['m1'] = new FolderData('Administrative Information and Prescribing Information','m1-administrative-information-and-prescribing-information');
    xmlmap['m2'] = new FolderData('Common Technical Document Summaries','m2-common-technical-document-summaries');
    xmlmap['m2/22-intro'] = new FolderData('Introduction','m2-2-introduction');
    xmlmap['m2/22-intro/introduction.pdf'] = new FolderData('Introduction','m2-2-introduction');
    xmlmap['m2/23-qos'] = new FolderData('Quality Overall Summary','m2-3-quality-overall-summary');
    xmlmap['m2/23-qos/introduction.pdf'] = new FolderData('Introduction','m2-3-introduction');
    xmlmap['m2/23-qos/drug-substance.pdf'] = new FolderData('Drug Substance - <Name> - <Manufacturer>','m2-3-s-drug-substance');
    xmlmap['m2/23-qos/drug-product-name.pdf'] = new FolderData('Drug Product - <Name>','m2-3-p-drug-product');
    xmlmap['m2/23-qos/appendices.pdf'] = new FolderData('Appendices','m2-3-a-appendices');
    xmlmap['m2/23-qos/regional-information.pdf'] = new FolderData('Regional Information','m2-3-r-regional-information');
    xmlmap['m2/24-nonclin-over'] = new FolderData('Nonclinical Overview','m2-4-nonclinical-overview');
    xmlmap['m2/24-nonclin-over/nonclinical-overview.pdf'] = new FolderData('Nonclinical Overview','m2-4-nonclinical-overview');
    xmlmap['m2/25-clin-over'] = new FolderData('Clinical Overview','m2-5-clinical-overview');
    xmlmap['m2/25-clin-over/clinical-overview.pdf'] = new FolderData('Clinical Overview','m2-5-clinical-overview');
    xmlmap['m2/26-nonclin-sum'] = new FolderData('Nonclinical Written and Tabulated Summaries','m2-6-nonclinical-written-and-tabulated-summaries');
    xmlmap['m2/26-nonclin-sum/introduction.pdf'] = new FolderData('Introduction','m2-6-1-introduction');
    xmlmap['m2/26-nonclin-sum/pharmacol-written-summary.pdf'] = new FolderData('Pharmacology Written Summary','m2-6-2-pharmacology-written-summary');
    xmlmap['m2/26-nonclin-sum/pharmacol-tabulated-summary.pdf'] = new FolderData('Pharmacology Tabulated Summary','m2-6-3-pharmacology-tabulated-summary');
    xmlmap['m2/26-nonclin-sum/pharmkin-written-summary.pdf'] = new FolderData('Pharmacokinetics Written Summary','m2-6-4-pharmacokinetics-written-summary');
    xmlmap['m2/26-nonclin-sum/pharmkin-tabulated-summary.pdf'] = new FolderData('Pharmacokinetics Tabulated Summary','m2-6-5-pharmacokinetics-tabulated-summary');
    xmlmap['m2/26-nonclin-sum/toxicology-written-summary.pdf'] = new FolderData('Toxicology Written Summary','m2-6-6-toxicology-written-summary');
    xmlmap['m2/26-nonclin-sum/toxicology-tabulated-summary.pdf'] = new FolderData('Toxicology Tabulated Summary','m2-6-7-toxicology-tabulated-summary');
    xmlmap['m2/27-clin-sum'] = new FolderData('Clinical Summary','m2-7-clinical-summary');
    xmlmap['m2/27-clin-sum/summary-biopharm.pdf'] = new FolderData('Summary of Biopharmaceutic Studies and Associated Analytical Methods','m2-7-1-summary-of-biopharmaceutic-studies-and-associated-analytical-methods');
    xmlmap['m2/27-clin-sum/summary-clin-pharm.pdf'] = new FolderData('Summary of Clinical Pharmacology Studies','m2-7-2-summary-of-clinical-pharmacology-studies');
    xmlmap['m2/27-clin-sum/summary-clin-efficacy-indication1.pdf'] = new FolderData('Clinical Summary','m2-7-clinical-summary');
    xmlmap['m2/27-clin-sum/summary-clin-safety.pdf'] = new FolderData('Summary of Clinical Safety','m2-7-4-summary-of-clinical-safety');
    xmlmap['m2/27-clin-sum/literature-references.pdf'] = new FolderData('Literature References','m2-7-5-literature-references');
    xmlmap['m2/27-clin-sum/synopses-indiv-studies.pdf'] = new FolderData('Synopses of Individual Studies','m2-7-6-synopses-of-individual-studies');
    xmlmap['m1'] = new FolderData('Administrative Information and Prescribing Information','m1-administrative-information-and-prescribing-information');
    xmlmap['m3'] = new FolderData('Quality','m3-quality');
    xmlmap['m4'] = new FolderData('Nonclinical Study Reports','m4-nonclinical-study-reports');
    xmlmap['m5'] = new FolderData('Clinical Study Reports','m5-clinical-study-reports');
    xmlmap['m3/32-body-data'] = new FolderData('Body of Data','m3-2-body-of-data');
    xmlmap['m3/32-body-data/32s-drug-sub'] = new FolderData('Drug Substance','m3-2-s-drug-substance');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1'] = new FolderData('Drug Substance - Drug Substance Name - Manufacturer','m3-2-s-drug-substanc');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s1-gen-info'] = new FolderData('General Information (name, manufacturer)','m3-2-s-1-general-information');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s1-gen-info/nomenclature.pdf'] = new FolderData('Nomenclature (name, manufacturer)','m3-2-s-1-1-nomenclature');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s1-gen-info/structure.pdf'] = new FolderData('Structure (name, manufacturer)','m3-2-s-1-2-structure');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s1-gen-info/general-properties.pdf'] = new FolderData('General Properties (name, manufacturer)','m3-2-s-1-3-general-properties');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s2-manuf'] = new FolderData('Manufacture (name, manufacturer)','m3-2-s-2-manufacture');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s2-manuf/manufacturer.pdf'] = new FolderData('Manufacturer(s) (name, manufacturer)','m3-2-s-2-1-manufacturer');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s2-manuf/manuf-process-and-controls.pdf'] = new FolderData('Description of Manufacturing Process and Process Controls (name, manufacturer)','m3-2-s-2-2-description-of-manufacturing-process-and-process-controls');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s2-manuf/control-of-materials.pdf'] = new FolderData('Control of Materials (name, manufacturer)','m3-2-s-2-3-control-of-materials');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s2-manuf/control-critical-steps.pdf'] = new FolderData('Controls of Critical Steps and Intermediates (name, manufacturer)','m3-2-s-2-4-controls-of-critical-steps-and-intermediates');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s2-manuf/process-validation.pdf'] = new FolderData('Process Validation and/or Evaluation (name, manufacturer)','m3-2-s-2-5-process-validation-and-or-evaluation');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s2-manuf/manuf-process-development.pdf'] = new FolderData('Manufacturing Process Development (name, manufacturer)','m3-2-s-2-6-manufacturing-process-development');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s3-charac'] = new FolderData('Characterisation (name, manufacturer)','m3-2-s-3-characterisation');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s3-charac/elucidation-of-structure.pdf'] = new FolderData('Elucidation of Structure and Other Characteristics (name, manufacturer)','m3-2-s-3-1-elucidation-of-structure-and-other-characteristics');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s3-charac/impurities.pdf'] = new FolderData('Impurities (name, manufacturer)','m3-2-s-3-2-impurities');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub'] = new FolderData('Control of Drug Substance (name, manufacturer)','m3-2-s-4-control-of-drug-substance');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub/32s41-spec'] = new FolderData('Specification (name, manufacturer)','m3-2-s-4-1-specification');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub/32s41-spec/specification.pdf'] = new FolderData('Specification (name, manufacturer)','m3-2-s-4-1-specification');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub/32s42-analyt-proc'] = new FolderData('Analytical Procedures (name, manufacturer)','m3-2-s-4-2-analytical-procedures');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub/32s42-analyt-proc/analytical-procedure-1.pdf'] = new FolderData('Analytical Procedure-1','m3-2-s-4-2-analytical-procedures');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub/32s42-analyt-proc/analytical-procedure-2.pdf'] = new FolderData('Analytical Procedure-2','m3-2-s-4-2-analytical-procedures');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub/32s42-analyt-proc/analytical-procedure-3.pdf'] = new FolderData('Analytical Procedure-3','m3-2-s-4-2-analytical-procedures');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub/32s43-val-analyt-proc'] = new FolderData('Validation of Analytical Procedures','m3-2-s-4-3-validation-of-analytical-procedures-name-manufacturer');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub/32s43-val-analyt-proc/validation-analyt-procedure-1.pdf'] = new FolderData('Validation of Analytical Procedure-1','m3-2-s-4-3-validation-of-analytical-procedures');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub/32s43-val-analyt-proc/validation-analyt-procedure-2.pdf'] = new FolderData('Validation of Analytical Procedure-2','m3-2-s-4-3-validation-of-analytical-procedures');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub/32s43-val-analyt-proc/validation-analyt-procedure-3.pdf'] = new FolderData('Validation of Analytical Procedure-3','m3-2-s-4-3-validation-of-analytical-procedures');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub/32s44-batch-analys'] = new FolderData('Batch Analyses (name, manufacturer)','m3-2-s-4-4-batch-analyses');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub/32s44-batch-analys/batch-analyses.pdf'] = new FolderData('Batch Analyses (name, manufacturer)','m3-2-s-4-4-batch-analyses');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub/32s45-justif-spec'] = new FolderData('Justification of Specification (name, manufacturer)','m3-2-s-4-5-justification-of-specification');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s4-contr-drug-sub/32s45-justif-spec/justification-of-specification.pdf'] = new FolderData('Justification of Specification (name, manufacturer)','m3-2-s-4-5-justification-of-specification');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s5-ref-stand'] = new FolderData('Reference Standards or Materials (name, manufacturer)','m3-2-s-5-reference-standards-or-materials');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s5-ref-stand/reference-standards.pdf'] = new FolderData('Reference Standards or Materials (name, manufacturer)','m3-2-s-5-reference-standards-or-materials');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s6-cont-closure-sys'] = new FolderData('Container Closure System (name, manufacturer)','m3-2-s-6-container-closure-system');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s6-cont-closure-sys/container-closure-system.pdf'] = new FolderData('Container Closure System (name, manufacturer)','m3-2-s-6-container-closure-system');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s7-stab'] = new FolderData('Stability (name, manufacturer)','m3-2-s-7-stability');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s7-stab/stability-summary.pdf'] = new FolderData('Stability Summary and Conclusions (name, manufacturer)','m3-2-s-7-1-stability-summary-and-conclusions');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s7-stab/postapproval-stability.pdf'] = new FolderData('Post-approval Stability Protocol and Stability Commitment (name, manufacturer)','m3-2-s-7-2-post-approval-stability-protocol-and-stability-commitment');
    xmlmap['m3/32-body-data/32s-drug-sub/substance-1-manufacturer-1/32s7-stab/stability-data.pdf'] = new FolderData('Stability Data (name, manufacturer)','m3-2-s-7-3-stability-data');
    xmlmap['m3/32-body-data/32p-drug-prod'] = new FolderData('Drug Product (name, dosage form)','m3-2-p-drug-product');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1'] = new FolderData('Drug Product (name, dosage form) – Name','m3-2-p-drug-product');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p1-desc-comp'] = new FolderData('Description and Composition of the Drug Product (name, dosage form)','m3-2-p-1-description-and-composition-of-the-drug-product');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p1-desc-comp/description-and-composition.pdf'] = new FolderData('Description and Composition of the Drug Product (name, dosage form)','m3-2-p-1-description-and-composition-of-the-drug-product');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p2-pharm-dev'] = new FolderData('Pharmaceutical Development (name, dosage form)','m3-2-p-2-pharmaceutical-development');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p2-pharm-dev/pharmaceutical-development.pdf'] = new FolderData('Pharmaceutical Development (name, dosage form)','m3-2-p-2-pharmaceutical-development');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p3-manuf'] = new FolderData('Manufacture (name, dosage form)','m3-2-p-3-manufacture');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p3-manuf/manufacturers.pdf'] = new FolderData('Manufacturer(s) (name, dosage form)','m3-2-p-3-manufactures');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p3-manuf/batch-formula.pdf'] = new FolderData('Batch Formula (name, dosage form)','m3-2-p-3-2-batch-formula');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p3-manuf/manuf-process-and-controls.pdf'] = new FolderData('Description of Manufacturing Process and Process Controls (name, dosage form)','m3-2-p-3-3-description-of-manufacturing-process-and-process-controls');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p3-manuf/control-critical-steps.pdf'] = new FolderData('Controls of Critical Steps and Intermediates (name, dosage form)','m3-2-p-3-4-controls-of-critical-steps-and-intermediates');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p3-manuf/process-validation.pdf'] = new FolderData('Process Validation and/or Evaluation (name, dosage form)','m3-2-p-3-5-process-validation-and-or-evaluation');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip'] = new FolderData('Control of Excipients (name, dosage form)', 'm3-2-p-4-control-of-excipients');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip/excipient-1'] = new FolderData('Control of Excipients (name, dosage form) – Excipient ', 'm3-2-p-4-control-of-excipients');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip/excipient-1/specifications.pdf'] = new FolderData('Specifications (name, dosage form)', 'm3-2-p-4-1-specifications');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip/excipient-1/analytical-procedures.pdf'] = new FolderData('Analytical Procedures (name, dosage form)','m3-2-p-4-2-analytical-procedures');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip/excipient-1/validation-analyt-procedures.pdf'] = new FolderData('Validation of Analytical Procedures (name, dosage form)','m3-2-p-4-3-validation-of-analytical-procedures');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip/excipient-1/justification-of-specifications.pdf'] = new FolderData('Justification of Specifications (name, dosage form)','m3-2-p-4-4-justification-of-specifications');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip/excipients-human-animal.pdf'] = new FolderData('Excipients of Human or Animal Origin (name, dosage form)','m3-2-p-4-5-excipients-of-human-or-animal-origin');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p4-contr-excip/novel-excipients.pdf'] = new FolderData('Novel Excipients (name, dosage form)','m3-2-p-4-6-novel-excipients');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod'] = new FolderData('Control of Drug Product (name, dosage form)','m3-2-p-5-control-of-drug-product');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p51-spec'] = new FolderData('Specification(s) (name, dosage form)','m3-2-p-5-1-specifications');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p51-spec/specifications.pdf'] = new FolderData('Specification(s) (name, dosage form)','m3-2-p-5-1-specifications');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p52-analyt-proc'] = new FolderData('Analytical Procedures (name, dosage form)','m3-2-p-5-2-analytical-procedures');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p52-analyt-proc/analytical-procedure-1.pdf'] = new FolderData('Analytical Procedure – 1','m3-2-p-5-2-analytical-procedures');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p53-val-analyt-proc'] = new FolderData('Validation of Analytical Procedures (name, dosage form)','m3-2-p-5-3-validation-of-analytical-procedures');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p53-val-analyt-proc/validation-analytical-procedures-1.pdf'] = new FolderData('Validation of Analytical Procedures – 1','m3-2-p-5-3-validation-of-analytical-procedures');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p54-batch-analys'] = new FolderData('Batch Analyses (name, dosage form)','m3-2-p-5-4-batch-analyses');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p54-batch-analys/batch-analyses.pdf'] = new FolderData('Batch Analyses (name, dosage form)','m3-2-p-5-4-batch-analyses');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p55-charac-imp'] = new FolderData('Characterisation of Impurities (name, dosage form)','m3-2-p-5-5-characterisation-of-impurities');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p55-charac-imp/characterisation-impurities.pdf'] = new FolderData('Characterisation of Impurities (name, dosage form)','m3-2-p-5-5-characterisation-of-impurities');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p56-justif-spec'] = new FolderData('Justification of Specifications (name, dosage form)','m3-2-p-5-6-justification-of-specifications');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p5-contr-drug-prod/32p56-justif-spec/justification-of-specifications.pdf'] = new FolderData('Justification of Specifications (name, dosage form)','m3-2-p-5-6-justification-of-specifications');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p6-ref-stand'] = new FolderData('Reference Standards or Materials (name, dosage form)','m3-2-p-6-reference-standards-or-materials');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p6-ref-stand/reference-standards.pdf'] = new FolderData('Reference Standards or Materials (name, dosage form)','m3-2-p-6-reference-standards-or-materials');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p7-cont-closure-sys'] = new FolderData('Container Closure System (name, dosage form)','m3-2-p-7-container-closure-system');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p7-cont-closure-sys/container-closure-system.pdf'] = new FolderData('Container Closure System (name, dosage form)','m3-2-p-7-container-closure-system');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p8-stab'] = new FolderData('Stability (name, dosage form)','m3-2-p-8-stability');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p8-stab/stability-summary.pdf'] = new FolderData('Stability Summary and Conclusion (name, dosage form)','m3-2-p-8-1-stability-summary-and-conclusion');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p8-stab/postapproval-stability.pdf'] = new FolderData('Post-approval Stability Protocol and Stability Commitment (name, dosage form)','m3-2-p-8-2-post-approval-stability-protocol-and-stability-commitment');
    xmlmap['m3/32-body-data/32p-drug-prod/product-1/32p8-stab/stability-data.pdf'] = new FolderData('Stability Data (name, dosage form)','m3-2-p-8-3-stability-data');
    xmlmap['m3/32-body-data/32a-app'] = new FolderData('Appendices','m3-2-a-appendices');
    xmlmap['m3/32-body-data/32a-app/32a1-fac-equip'] = new FolderData('Facilities and Equipment (name, manufacturer)','m3-2-a-1-facilities-and-equipment');
    xmlmap['m3/32-body-data/32a-app/32a1-fac-equip/facilities-and-equipment-report-1.pdf'] = new FolderData('Facilities and Equipment Report 1','m3-2-a-1-facilities-and-equipment');
    xmlmap['m3/32-body-data/32a-app/32a2-advent-agent'] = new FolderData('Adventitious Agents Safety Evaluation (name, dosage form, manufacturer)','m3-2-a-2-adventitious-agents-safety-evaluation');
    xmlmap['m3/32-body-data/32a-app/32a2-advent-agent/adventitious-agents-report-1.pdf'] = new FolderData('Adventitious Agents Safety Evaluation Report 1','m3-2-a-2-adventitious-agents-safety-evaluation');
    xmlmap['m3/32-body-data/32a-app/32a2-advent-agent/adventitious-agents-report-2.pdf'] = new FolderData('Adventitious Agents Safety Evaluation Report 2','m3-2-a-2-adventitious-agents-safety-evaluation');
    xmlmap['m3/32-body-data/32a-app/32a3-excip-name-1'] = new FolderData('Excipients – Name','m3-2-a-3-excipients');
    xmlmap['m3/32-body-data/32a-app/32a3-excip-name-2'] = new FolderData('Excipients – Name','m3-2-a-3-excipients');
    xmlmap['m3/32-body-data/32r-reg-info'] = new FolderData('Regional Information','m3-2-r-regional-information');
    xmlmap['m3/32-body-data/32r-reg-info/regional-information.pdf'] = new FolderData('Regional Information','m3-2-r-regional-information');
    xmlmap['m3/33-lit-ref'] = new FolderData('Literature References','m3-3-literature-references');
    xmlmap['m3/33-lit-ref/reference-1.pdf'] = new FolderData('Reference 1','m3-3-literature-references');
    xmlmap['m3/33-lit-ref/reference-2.pdf'] = new FolderData('Reference 2','m3-3-literature-references');
    xmlmap['m4'] = new FolderData('Nonclinical Study Reports','m4-nonclinical-study-reports');
    xmlmap['m4/42-stud-rep'] = new FolderData('Study Reports','m4-2-study-reports');
    xmlmap['m4/42-stud-rep/421-pharmacol'] = new FolderData('Pharmacology','m4-2-1-pharmacology');
    xmlmap['m4/42-stud-rep/421-pharmacol/4211-prim-pd'] = new FolderData('Primary Pharmacodynamics','m4-2-1-1-primary-pharmacodynamics');

    xmlmap['m4/42-stud-rep/421-pharmacol/4211-prim-pd/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-1-1-primary-pharmacodynamics');
    xmlmap['m4/42-stud-rep/421-pharmacol/4211-prim-pd/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-1-1-primary-pharmacodynamics');
    xmlmap['m4/42-stud-rep/421-pharmacol/4211-prim-pd/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-1-1-primary-pharmacodynamics');
    xmlmap['m4/42-stud-rep/421-pharmacol/4212-sec-pd'] = new FolderData('Secondary Pharmacodynamics', 'm4-2-1-2-secondary-pharmacodynamics');
    xmlmap['m4/42-stud-rep/421-pharmacol/4212-sec-pd/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-1-2-secondary-pharmacodynamics');
    xmlmap['m4/42-stud-rep/421-pharmacol/4212-sec-pd/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-1-2-secondary-pharmacodynamics');
    xmlmap['m4/42-stud-rep/421-pharmacol/4212-sec-pd/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-1-2-secondary-pharmacodynamics');
    xmlmap['m4/42-stud-rep/421-pharmacol/4213-safety-pharmacol'] = new FolderData('Safety Pharmacology', 'm4-2-1-3-safety-pharmacology');
    xmlmap['m4/42-stud-rep/421-pharmacol/4213-safety-pharmacol/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-1-3-safety-pharmacology');
    xmlmap['m4/42-stud-rep/421-pharmacol/4213-safety-pharmacol/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-1-3-safety-pharmacology');
    xmlmap['m4/42-stud-rep/421-pharmacol/4213-safety-pharmacol/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-1-3-safety-pharmacology');
    xmlmap['m4/42-stud-rep/421-pharmacol/4214-pd-drug-interact'] = new FolderData('Pharmacodynamic Drug Interactions', 'm4-2-1-4-pharmacodynamic-drug-interactions');
    xmlmap['m4/42-stud-rep/421-pharmacol/4214-pd-drug-interact/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-1-4-pharmacodynamic-drug-interactions');
    xmlmap['m4/42-stud-rep/421-pharmacol/4214-pd-drug-interact/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-1-4-pharmacodynamic-drug-interactions');
    xmlmap['m4/42-stud-rep/421-pharmacol/4214-pd-drug-interact/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-1-4-pharmacodynamic-drug-interactions');

    xmlmap['m4/42-stud-rep/422-pk'] = new FolderData('Pharmacokinetics', 'm4-2-2-pharmacokinetics');
    xmlmap['m4/42-stud-rep/422-pk/4221-analyt-met-val'] = new FolderData('Analytical Methods and Validation Reports', 'm4-2-2-1-analytical-methods-and-validation-reports');
    xmlmap['m4/42-stud-rep/422-pk/4221-analyt-met-val/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-2-1-analytical-methods-and-validation-reports');
    xmlmap['m4/42-stud-rep/422-pk/4221-analyt-met-val/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-2-1-analytical-methods-and-validation-reports');
    xmlmap['m4/42-stud-rep/422-pk/4222-absorp'] = new FolderData('Absorption', 'm4-2-2-2-absorption');
    xmlmap['m4/42-stud-rep/422-pk/4222-absorp/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-2-2-absorption');
    xmlmap['m4/42-stud-rep/422-pk/4222-absorp/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-2-2-absorption');
    xmlmap['m4/42-stud-rep/422-pk/4222-absorp/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-2-2-absorption');
    xmlmap['m4/42-stud-rep/422-pk/4223-distrib'] = new FolderData('Distribution', 'm4-2-2-3-distribution');
    xmlmap['m4/42-stud-rep/422-pk/4223-distrib/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-2-3-distribution');
    xmlmap['m4/42-stud-rep/422-pk/4223-distrib/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-2-3-distribution');
    xmlmap['m4/42-stud-rep/422-pk/4223-distrib/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-2-3-distribution');
    xmlmap['m4/42-stud-rep/422-pk/4224-metab'] = new FolderData('Metabolism', 'm4-2-2-4-metabolism');
    xmlmap['m4/42-stud-rep/422-pk/4224-metab/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-2-4-metabolism');
    xmlmap['m4/42-stud-rep/422-pk/4224-metab/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-2-4-metabolism');
    xmlmap['m4/42-stud-rep/422-pk/4224-metab/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-2-4-metabolism');

    xmlmap['m4/42-stud-rep/422-pk/4225-excr'] = new FolderData('Excretion', 'm4-2-2-5-excretion');
    xmlmap['m4/42-stud-rep/422-pk/4225-excr/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-2-5-excretion');
    xmlmap['m4/42-stud-rep/422-pk/4225-excr/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-2-5-excretion');
    xmlmap['m4/42-stud-rep/422-pk/4225-excr/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-2-5-excretion');
    xmlmap['m4/42-stud-rep/422-pk/4226-pk-drug-interact'] = new FolderData('Pharmacokinetic Drug Interactions (nonclinical)', 'm4-2-2-6-pharmacokinetic-drug-interactions');
    xmlmap['m4/42-stud-rep/422-pk/4226-pk-drug-interact/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-2-6-pharmacokinetic-drug-interactions');
    xmlmap['m4/42-stud-rep/422-pk/4226-pk-drug-interact/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-2-6-pharmacokinetic-drug-interactions');
    xmlmap['m4/42-stud-rep/422-pk/4226-pk-drug-interact/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-2-6-pharmacokinetic-drug-interactions');
    xmlmap['m4/42-stud-rep/422-pk/4227-other-pk-stud'] = new FolderData('Other Pharmacokinetic Studies', 'm4-2-2-7-other-pharmacokinetic-studies');
    xmlmap['m4/42-stud-rep/422-pk/4227-other-pk-stud/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-2-7-other-pharmacokinetic-studies');
    xmlmap['m4/42-stud-rep/422-pk/4227-other-pk-stud/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-2-7-other-pharmacokinetic-studies');
    xmlmap['m4/42-stud-rep/422-pk/4227-other-pk-stud/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-2-7-other-pharmacokinetic-studies');
    xmlmap['m4/42-stud-rep/423-tox'] = new FolderData('Toxicology', 'm4-2-3-toxicology');
    xmlmap['m4/42-stud-rep/423-tox/4231-single-dose-tox'] = new FolderData('Single-Dose Toxicity (in order by species, by route)', 'm4-2-3-1-single-dose-toxicit');
    xmlmap['m4/42-stud-rep/423-tox/4231-single-dose-tox/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-1-single-dose-toxicity');

    xmlmap['m4/42-stud-rep/423-tox/4231-single-dose-tox/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-1-single-dose-toxicity');
    xmlmap['m4/42-stud-rep/423-tox/4231-single-dose-tox/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-1-single-dose-toxicity');
    xmlmap['m4/42-stud-rep/423-tox/4232-repeat-dose-tox'] = new FolderData('Repeat-Dose Toxicity', 'm4-2-3-2-repeat-dose-toxicity');
    xmlmap['m4/42-stud-rep/423-tox/4232-repeat-dose-tox/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-2-repeat-dose-toxicity');
    xmlmap['m4/42-stud-rep/423-tox/4232-repeat-dose-tox/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-2-repeat-dose-toxicity');
    xmlmap['m4/42-stud-rep/423-tox/4232-repeat-dose-tox/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-2-repeat-dose-toxicity');
    xmlmap['m4/42-stud-rep/423-tox/4233-genotox'] = new FolderData('Genotoxicity', 'm4-2-3-3-genotoxicity');
    xmlmap['m4/42-stud-rep/423-tox/4233-genotox/42331-in-vitro'] = new FolderData('In vitro', 'm4-2-3-3-1-in-vitro');
    xmlmap['m4/42-stud-rep/423-tox/4233-genotox/42331-in-vitro/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-3-1-in-vitro');
    xmlmap['m4/42-stud-rep/423-tox/4233-genotox/42331-in-vitro/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-3-1-in-vitro');
    xmlmap['m4/42-stud-rep/423-tox/4233-genotox/42331-in-vitro/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-3-1-in-vitro');
    xmlmap['m4/42-stud-rep/423-tox/4233-genotox/42332-in-vivo'] = new FolderData('In vivo', 'm4-2-3-3-2-in-vivo');
    xmlmap['m4/42-stud-rep/423-tox/4233-genotox/42332-in-vivo/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-3-2-in-vivo');
    xmlmap['m4/42-stud-rep/423-tox/4233-genotox/42332-in-vivo/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-3-2-in-vivo');
    xmlmap['m4/42-stud-rep/423-tox/4233-genotox/42332-in-vivo/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-3-2-in-vivo');

    xmlmap['m4/42-stud-rep/423-tox/4234-carcigen'] = new FolderData('Carcinogenicity', 'm4-2-3-4-carcinogenicity');
    xmlmap['m4/42-stud-rep/423-tox/4234-carcigen/42341-lt-stud'] = new FolderData('Long-term studies', 'm4-2-3-4-1-long-term-studies');
    xmlmap['m4/42-stud-rep/423-tox/4234-carcigen/42341-lt-stud/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-4-1-long-term-studies');
    xmlmap['m4/42-stud-rep/423-tox/4234-carcigen/42341-lt-stud/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-4-1-long-term-studies');
    xmlmap['m4/42-stud-rep/423-tox/4234-carcigen/42341-lt-stud/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-4-1-long-term-studies');
    xmlmap['m4/42-stud-rep/423-tox/4234-carcigen/42342-smt-stud'] = new FolderData('Short- or medium-term studies', 'm4-2-3-4-2-short-or-medium-term-studies');
    xmlmap['m4/42-stud-rep/423-tox/4234-carcigen/42342-smt-stud/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-4-2-short-or-medium-term-studies');
    xmlmap['m4/42-stud-rep/423-tox/4234-carcigen/42342-smt-stud/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-4-2-short-or-medium-term-studies');
    xmlmap['m4/42-stud-rep/423-tox/4234-carcigen/42342-smt-stud/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-4-2-short-or-medium-term-studies');
    xmlmap['m4/42-stud-rep/423-tox/4234-carcigen/42343-other-stud'] = new FolderData('Other studies', 'm4-2-3-4-3-other-studies');
    xmlmap['m4/42-stud-rep/423-tox/4234-carcigen/42343-other-stud/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-4-3-other-studies');
    xmlmap['m4/42-stud-rep/423-tox/4234-carcigen/42343-other-stud/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-4-3-other-studies');
    xmlmap['m4/42-stud-rep/423-tox/4234-carcigen/42343-other-stud/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-4-3-other-studies');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox'] = new FolderData('Reproductive and Developmental Toxicity', 'm4-2-3-5-reproductive-and-developmental-toxicity');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42351-fert-embryo-dev'] = new FolderData('Fertility and early embryonic development', 'm4-2-3-5-1-fertility-and-early-embryonic-development');

    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42351-fert-embryo-dev/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-5-1-fertility-and-early-embryonic-development');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42351-fert-embryo-dev/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-5-1-fertility-and-early-embryonic-development');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42351-fert-embryo-dev/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-5-1-fertility-and-early-embryonic-development');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42352-embryo-fetal-dev'] = new FolderData('Embryo-fetal development', 'm4-2-3-5-2-embryo-fetal-development');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42352-embryo-fetal-dev/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-5-2-embryo-fetal-development');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42352-embryo-fetal-dev/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-5-2-embryo-fetal-development');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42352-embryo-fetal-dev/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-5-2-embryo-fetal-development');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42353-pre-postnatal-dev'] = new FolderData('Prenatal and postnatal development, including maternal function', 'm4-2-3-5-3-prenatal-and-postnatal-development-including-maternal-function');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42353-pre-postnatal-dev/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-5-3-prenatal-and-postnatal-development-including-maternal-function');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42353-pre-postnatal-dev/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-5-3-prenatal-and-postnatal-development-including-maternal-function');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42353-pre-postnatal-dev/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-5-3-prenatal-and-postnatal-development-including-maternal-function');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42354-juv'] = new FolderData('Studies in which the offspring', 'm4-2-3-5-4-studies-in-which-the-offspring-juvenile-animals-are-dosed-and-or-further-evaluated');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42354-juv/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-5-4-studies-in-which-the-offspring-juvenile-animals-are-dosed-and-or-further-evaluated');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42354-juv/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-5-4-studies-in-which-the-offspring-juvenile-animals-are-dosed-and-or-further-evaluated');
    xmlmap['m4/42-stud-rep/423-tox/4235-repro-dev-tox/42354-juv/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-5-4-studies-in-which-the-offspring-juvenile-animals-are-dosed-and-or-further-evaluated');
//     /* 7 */
    xmlmap['m4/42-stud-rep/423-tox/4236-loc-tol'] = new FolderData('Local Tolerance', 'm4-2-3-6-local-tolerance');
    xmlmap['m4/42-stud-rep/423-tox/4236-loc-tol/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-6-local-tolerance');
    xmlmap['m4/42-stud-rep/423-tox/4236-loc-tol/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-6-local-tolerance');
    xmlmap['m4/42-stud-rep/423-tox/4236-loc-tol/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-6-local-tolerance');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud'] = new FolderData('Other Toxicity Studies', 'm4-2-3-7-other-toxicity-studies');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42371-antigen'] = new FolderData('Antigenicity', 'm4-2-3-7-1-antigenicity');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42371-antigen/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-7-1-antigenicity');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42371-antigen/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-7-1-antigenicity');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42371-antigen/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-7-1-antigenicity');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42372-immunotox'] = new FolderData('Immunotoxicity', 'm4-2-3-7-2-immunotoxicity');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42372-immunotox/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-7-2-immunotoxicity');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42372-immunotox/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-7-2-immunotoxicity');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42372-immunotox/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-7-2-immunotoxicity');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42373-mechan-stud'] = new FolderData('Mechanistic studies', 'm4-2-3-7-3-mechanistic-studies');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42373-mechan-stud/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-7-3-mechanistic-studies');

    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42373-mechan-stud/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-7-3-mechanistic-studies');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42373-mechan-stud/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-7-3-mechanistic-studies');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42374-dep'] = new FolderData('Dependence', 'm4-2-3-7-4-dependence');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42374-dep/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-7-4-dependence');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42374-dep/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-7-4-dependence');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42374-dep/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-7-4-dependence');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42375-metab'] = new FolderData('Metabolites', 'm4-2-3-7-5-metabolites');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42375-metab/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-7-5-metabolites');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42375-metab/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-7-5-metabolites');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42375-metab/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-7-5-metabolites');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42376-imp'] = new FolderData('Impurities', 'm4-2-3-7-6-impurities');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42376-imp/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-7-6-impurities');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42376-imp/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-7-6-impurities');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42376-imp/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-7-6-impurities');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42377-other'] = new FolderData('Other', 'm4-2-3-7-7-other');

    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42377-other/study-report-1.pdf'] = new FolderData('Study Report 1', 'm4-2-3-7-7-other');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42377-other/study-report-2.pdf'] = new FolderData('Study Report 2', 'm4-2-3-7-7-other');
    xmlmap['m4/42-stud-rep/423-tox/4237-other-tox-stud/42377-other/study-report-3.pdf'] = new FolderData('Study Report 3', 'm4-2-3-7-7-other');
    xmlmap['m4/43-lit-ref'] = new FolderData('Literature References', 'm4-3-literature-references');
    xmlmap['m4/43-lit-ref/reference-1.pdf'] = new FolderData('Reference 1', 'm4-3-literature-references');
    xmlmap['m4/43-lit-ref/reference-2.pdf'] = new FolderData('Reference 2', 'm4-3-literature-references');
    xmlmap['m4/43-lit-ref/reference-3.pdf'] = new FolderData('Reference 3', 'm4-3-literature-references');
    xmlmap['m5'] = new FolderData('Clinical Study Reports', 'm5-clinical-study-reports');
    xmlmap['m5/52-tab-list'] = new FolderData('Tabular Listing of all Clinical Studies', 'm5-2-tabular-listing-of-all-clinical-studies');
    xmlmap['m5/52-tab-list/tabular-listing.pdf'] = new FolderData('Tabular Listing of all Clinical Studies', 'm5-2-tabular-listing-of-all-clinical-studies');
    xmlmap['m5/53-clin-stud-rep'] = new FolderData('Clinical Study Reports', 'm5-3-clinical-study-reports');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud'] = new FolderData('Reports of Biopharmaceutic Studies', 'm5-3-1-reports-of-biopharmaceutic-studies');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5311-ba-stud-rep'] = new FolderData('Bioavailability (BA) Study Reports', 'm5-3-1-1-bioavailability-study-reports');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5311-ba-stud-rep/study-report-1'] = new FolderData('Study Report 1', 'm5-3-1-1-bioavailability-study-reports');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5311-ba-stud-rep/study-report-2'] = new FolderData('Study Report 2', 'm5-3-1-1-bioavailability-study-reports');

    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5311-ba-stud-rep/study-report-3'] = new FolderData('Study Report 3', 'm5-3-1-1-bioavailability-study-reports');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5312-compar-ba-be-stud-rep'] = new FolderData('Comparative BA and Bioequivalence (BE) Study Reports', 'm5-3-1-2-comparative-ba-and-bioequivalence-study-reports');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5312-compar-ba-be-stud-rep/study-report-1'] = new FolderData('Study Report 1', 'm5-3-1-2-comparative-ba-and-bioequivalence-study-reports');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5312-compar-ba-be-stud-rep/study-report-2'] = new FolderData('Study Report 2', 'm5-3-1-2-comparative-ba-and-bioequivalence-study-reports');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5312-compar-ba-be-stud-rep/study-report-3'] = new FolderData('Study Report 3', 'm5-3-1-2-comparative-ba-and-bioequivalence-study-reports');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5313-in-vitro-in-vivo-corr-stud-rep'] = new FolderData('In vitro – In vivo Correlation Study Reports', 'm5-3-1-3-in-vitro-in-vivo-correlation-study-reports');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5313-in-vitro-in-vivo-corr-stud-rep/study-report-1'] = new FolderData('Study Report 1', 'm5-3-1-3-in-vitro-in-vivo-correlation-study-reports');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5313-in-vitro-in-vivo-corr-stud-rep/study-report-2'] = new FolderData('Study Report 2', 'm5-3-1-3-in-vitro-in-vivo-correlation-study-reports');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5313-in-vitro-in-vivo-corr-stud-rep/study-report-3'] = new FolderData('Study Report 3', 'm5-3-1-3-in-vitro-in-vivo-correlation-study-reports');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5314-bioanalyt-analyt-met'] = new FolderData('Reports of Bioanalytical and Analytical Methods for Human Studies', 'm5-3-1-4-reports-of-bioanalytical-and-analytical-methods-for-human-studies');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5314-bioanalyt-analyt-met/study-report-1'] = new FolderData('Study Report 1', 'm5-3-1-4-reports-of-bioanalytical-and-analytical-methods-for-human-studies');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5314-bioanalyt-analyt-met/study-report-2'] = new FolderData('Study Report 2', 'm5-3-1-4-reports-of-bioanalytical-and-analytical-methods-for-human-studies');
    xmlmap['m5/53-clin-stud-rep/531-rep-biopharm-stud/5314-bioanalyt-analyt-met/study-report-3'] = new FolderData('Study Report 3', 'm5-3-1-4-reports-of-bioanalytical-and-analytical-methods-for-human-studies');
    xmlmap['m5/53-clin-stud-rep/532-rep-stud-pk-human-biomat'] = new FolderData('Reports of Studies Pertinent to Pharmacokinetics using Human Biomaterials', 'm5-3-2-reports-of-studies-pertinent-to-pharmacokinetics-using-human-biomaterials');
    xmlmap['m5/53-clin-stud-rep/532-rep-stud-pk-human-biomat/5321-plasma-prot-bind-stud-rep'] = new FolderData('Plasma Protein Binding Study Reports', 'm5-3-2-1-plasma-protein-binding-study-reports');

    xmlmap['m5/53-clin-stud-rep/532-rep-stud-pk-human-biomat/5321-plasma-prot-bind-stud-rep/study-report-1'] = new FolderData('Study Report 1', 'm5-3-2-1-plasma-protein-binding-study-reports');
    xmlmap['m5/53-clin-stud-rep/532-rep-stud-pk-human-biomat/5321-plasma-prot-bind-stud-rep/study-report-2'] = new FolderData('Study Report 2', 'm5-3-2-1-plasma-protein-binding-study-reports');
    xmlmap['m5/53-clin-stud-rep/532-rep-stud-pk-human-biomat/5321-plasma-prot-bind-stud-rep/study-report-3'] = new FolderData('Study Report 3', 'm5-3-2-1-plasma-protein-binding-study-reports');
    xmlmap['m5/53-clin-stud-rep/532-rep-stud-pk-human-biomat/5322-rep-hep-metab-interact-stud'] = new FolderData('Reports of Hepatic Metabolism and Drug Interaction Studies', 'm5-3-2-2-reports-of-hepatic-metabolism-and-drug-interaction-studies');
    xmlmap['m5/53-clin-stud-rep/532-rep-stud-pk-human-biomat/5322-rep-hep-metab-interact-stud/study-report-1'] = new FolderData('Study Report 1', 'm5-3-2-2-reports-of-hepatic-metabolism-and-drug-interaction-studies');
    xmlmap['m5/53-clin-stud-rep/532-rep-stud-pk-human-biomat/5322-rep-hep-metab-interact-stud/study-report-2'] = new FolderData('Study Report 2', 'm5-3-2-2-reports-of-hepatic-metabolism-and-drug-interaction-studies');
    xmlmap['m5/53-clin-stud-rep/532-rep-stud-pk-human-biomat/5322-rep-hep-metab-interact-stud/study-report-3'] = new FolderData('Study Report 3', 'm5-3-2-2-reports-of-hepatic-metabolism-and-drug-interaction-studies');
    xmlmap['m5/53-clin-stud-rep/532-rep-stud-pk-human-biomat/5323-stud-other-human-biomat'] = new FolderData('Reports of Studies Using Other Human Biomaterials', 'm5-3-2-3-reports-of-studies-using-other-human-biomaterials');
    xmlmap['m5/53-clin-stud-rep/532-rep-stud-pk-human-biomat/5323-stud-other-human-biomat/study-report-1'] = new FolderData('Study Report 1', 'm5-3-2-3-reports-of-studies-using-other-human-biomaterials');
    xmlmap['m5/53-clin-stud-rep/532-rep-stud-pk-human-biomat/5323-stud-other-human-biomat/study-report-2'] = new FolderData('Study Report 2', 'm5-3-2-3-reports-of-studies-using-other-human-biomaterials');
    xmlmap['m5/53-clin-stud-rep/532-rep-stud-pk-human-biomat/5323-stud-other-human-biomat/study-report-3'] = new FolderData('Study Report 3', 'm5-3-2-3-reports-of-studies-using-other-human-biomaterials');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud'] = new FolderData('Reports of Human Pharmacokinetic (PK) Studies', 'm5-3-3-reports-of-human-pharmacokinetics-pk-studies');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5331-healthy-subj-pk-init-tol-stud-rep'] = new FolderData('Healthy Subject PK and Initial Tolerability Study Reports', 'm5-3-3-1-healthy-subject-pk-and-initial-tolerability-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5331-healthy-subj-pk-init-tol-stud-rep/study-report-1'] = new FolderData('Study Report 1', 'm5-3-3-1-healthy-subject-pk-and-initial-tolerability-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5331-healthy-subj-pk-init-tol-stud-rep/study-report-2'] = new FolderData('Study Report 2', 'm5-3-3-1-healthy-subject-pk-and-initial-tolerability-study-reports');
// /* 12 */
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5331-healthy-subj-pk-init-tol-stud-rep/study-report-3'] = new FolderData('Study Report 3', 'm5-3-3-1-healthy-subject-pk-and-initial-tolerability-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5332-patient-pk-init-tol-stud-rep'] = new FolderData('Patient PK and Initial Tolerability Study Reports', 'm5-3-3-2-patient-pk-and-initial-tolerability-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5332-patient-pk-init-tol-stud-rep/study-report-1'] = new FolderData('Study Report 1', 'm5-3-3-2-patient-pk-and-initial-tolerability-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5332-patient-pk-init-tol-stud-rep/study-report-2'] = new FolderData('Study Report 2', 'm5-3-3-2-patient-pk-and-initial-tolerability-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5332-patient-pk-init-tol-stud-rep/study-report-3'] = new FolderData('Study Report 3', 'm5-3-3-2-patient-pk-and-initial-tolerability-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5333-intrin-factor-pk-stud-rep'] = new FolderData('Intrinsic Factor PK Study Reports', 'm5-3-3-3-intrinsic-factor-pk-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5333-intrin-factor-pk-stud-rep/study-report-1'] = new FolderData('Study Report 1', 'm5-3-3-3-intrinsic-factor-pk-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5333-intrin-factor-pk-stud-rep/study-report-2'] = new FolderData('Study Report 2', 'm5-3-3-3-intrinsic-factor-pk-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5333-intrin-factor-pk-stud-rep/study-report-3'] = new FolderData('Study Report 3', 'm5-3-3-3-intrinsic-factor-pk-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5334-extrin-factor-pk-stud-rep'] = new FolderData('Extrinsic Factor PK Study Reports', 'm5-3-3-4-extrinsic-factor-pk-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5334-extrin-factor-pk-stud-rep/study-report-1'] = new FolderData('Study Report 1', 'm5-3-3-4-extrinsic-factor-pk-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5334-extrin-factor-pk-stud-rep/study-report-2'] = new FolderData('Study Report 2', '5-3-3-4-extrinsic-factor-pk-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5334-extrin-factor-pk-stud-rep/study-report-3'] = new FolderData('Study Report 3', 'm5-3-3-4-extrinsic-factor-pk-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5335-popul-pk-study-rep'] = new FolderData('Population PK Study Reports', '5-3-3-5-population-pk-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5335-popul-pk-study-rep/study-report-1'] = new FolderData('Study Report 1', 'm5-3-3-5-population-pk-study-reports');
// /* 13 */
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5335-popul-pk-study-rep/study-report-2'] = new FolderData('Study Report 2', 'm5-3-3-5-population-pk-study-reports');
    xmlmap['m5/53-clin-stud-rep/533-rep-human-pk-stud/5335-popul-pk-study-rep/study-report-3'] = new FolderData('Study Report 3', 'm5-3-3-5-population-pk-study-reports');
    xmlmap['m5/53-clin-stud-rep/534-rep-human-pd-stud'] = new FolderData('Reports of Human Pharmacodynamic (PD) Studies', 'm5-3-4-reports-of-human-pharmacodynamics-pd-studies');
    xmlmap['m5/53-clin-stud-rep/534-rep-human-pd-stud/5341-healthy-subj-pd-stud-rep'] = new FolderData('Healthy Subject PD and PK/PD Study Reports', 'm5-3-4-1-healthy-subject-pd-and-pk-pd-study-reports');
    xmlmap['m5/53-clin-stud-rep/534-rep-human-pd-stud/5341-healthy-subj-pd-stud-rep/study-report-1'] = new FolderData('Study Report 1', 'm5-3-4-1-healthy-subject-pd-and-pk-pd-study-reports');
    xmlmap['m5/53-clin-stud-rep/534-rep-human-pd-stud/5341-healthy-subj-pd-stud-rep/study-report-2'] = new FolderData('Study Report 2', 'm5-3-4-1-healthy-subject-pd-and-pk-pd-study-reports');
    xmlmap['m5/53-clin-stud-rep/534-rep-human-pd-stud/5341-healthy-subj-pd-stud-rep/study-report-3'] = new FolderData('Study Report 3', 'm5-3-4-1-healthy-subject-pd-and-pk-pd-study-reports');
    xmlmap['m5/53-clin-stud-rep/534-rep-human-pd-stud/5342-patient-pd-stud-rep'] = new FolderData('Patient PD and PK/PD Study Reports', 'm5-3-4-2-patient-pd-and-pk-pd-study-reports');
    xmlmap['m5/53-clin-stud-rep/534-rep-human-pd-stud/5342-patient-pd-stud-rep/study-report-1'] = new FolderData('Study Report 1', 'm5-3-4-2-patient-pd-and-pk-pd-study-reports');
    xmlmap['m5/53-clin-stud-rep/534-rep-human-pd-stud/5342-patient-pd-stud-rep/study-report-2'] = new FolderData('Study Report 2', 'm5-3-4-2-patient-pd-and-pk-pd-study-reports');
    xmlmap['m5/53-clin-stud-rep/534-rep-human-pd-stud/5342-patient-pd-stud-rep/study-report-3'] = new FolderData('Study Report 3', 'm5-3-4-2-patient-pd-and-pk-pd-study-reports');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud'] = new FolderData('Reports of Efficacy and Safety Studies', 'm5-3-5-reports-of-efficacy-and-safety-studies');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1'] = new FolderData('Reports of Efficacy and Safety Studies - Indication Name', 'm5-3-5-reports-of-efficacy-and-safety-studies');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5351-stud-rep-contr'] = new FolderData('Study Reports of Controlled Clinical Studies Pertinent to the Claimed Indication', 'm5-3-5-1-study-reports-of-controlled-clinical-studies-pertinent-to-the-claimed-indication');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5351-stud-rep-contr/study-report-1'] = new FolderData('Study Report 1', 'm5-3-5-1-study-reports-of-controlled-clinical-studies-pertinent-to-the-claimed-indication');
// /* 14 */
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5351-stud-rep-contr/study-report-2'] = new FolderData('Study Report 2', 'm5-3-5-1-study-reports-of-controlled-clinical-studies-pertinent-to-the-claimed-indication');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5351-stud-rep-contr/study-report-3'] = new FolderData('Study Report 3', 'm5-3-5-1-study-reports-of-controlled-clinical-studies-pertinent-to-the-claimed-indication');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5352-stud-rep-uncontr'] = new FolderData('Study Reports of Uncontrolled Clinical Studies', 'm5-3-5-2-study-reports-of-uncontrolled-clinical-studies');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5352-stud-rep-uncontr/study-report-1'] = new FolderData('Study Report 1', 'm5-3-5-2-study-reports-of-uncontrolled-clinical-studies');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5352-stud-rep-uncontr/study-report-2'] = new FolderData('Study Report 2', 'm5-3-5-2-study-reports-of-uncontrolled-clinical-studies');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5352-stud-rep-uncontr/study-report-3'] = new FolderData('Study Report 3', 'm5-3-5-2-study-reports-of-uncontrolled-clinical-studies');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5353-rep-analys-data-more-one-stud'] = new FolderData('Reports of Analyses of Data from More than One Study', 'm5-3-5-3-reports-of-analyses-of-data-from-more-than-one-study');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5353-rep-analys-data-more-one-stud/study-report-1'] = new FolderData('Study Report 1', 'm5-3-5-3-reports-of-analyses-of-data-from-more-than-one-study');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5353-rep-analys-data-more-one-stud/study-report-2'] = new FolderData('Study Report 2', 'm5-3-5-3-reports-of-analyses-of-data-from-more-than-one-study');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5353-rep-analys-data-more-one-stud/study-report-3'] = new FolderData('Study Report 3', 'm5-3-5-3-reports-of-analyses-of-data-from-more-than-one-study');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5354-other-stud-rep'] = new FolderData('Other Study Reports', 'm5-3-5-4-other-study-reports');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5354-other-stud-rep/study-report-1'] = new FolderData('Study Report 1', 'm5-3-5-4-other-study-reports');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5354-other-stud-rep/study-report-2'] = new FolderData('Study Report 2', 'm5-3-5-4-other-study-reports');
    xmlmap['m5/53-clin-stud-rep/535-rep-effic-safety-stud/indication-1/5354-other-stud-rep/study-report-3'] = new FolderData('Study Report 3', 'm5-3-5-4-other-study-reports');
    xmlmap['m5/53-clin-stud-rep/536-postmark-exp'] = new FolderData('Reports of Postmarketing Experience', 'm5-3-6-reports-of-postmarketing-experience');
    xmlmap['m5/53-clin-stud-rep/537-crf-ipl'] = new FolderData('Case Report Forms and Individual Patient Listings', 'm5-3-7-case-report-forms-and-individual-patient-listings');
    xmlmap['m5/53-clin-stud-rep/537-crf-ipl/study-1'] = new FolderData('Study 1', 'm5-3-7-case-report-forms-and-individual-patient-listings');
    xmlmap['m5/53-clin-stud-rep/537-crf-ipl/study-1/filename-1.pdf'] = new FolderData('Document/Dataset 1', 'm5-3-7-case-report-forms-and-individual-patient-listings');
    xmlmap['m5/53-clin-stud-rep/537-crf-ipl/study-1/filename-2.pdf'] = new FolderData('Document/Dataset 2', 'm5-3-7-case-report-forms-and-individual-patient-listings');
    xmlmap['m5/53-clin-stud-rep/537-crf-ipl/study-1/filename-3.pdf'] = new FolderData('Document/Dataset 3', 'm5-3-7-case-report-forms-and-individual-patient-listings');
    xmlmap['m5/53-clin-stud-rep/537-crf-ipl/study-2'] = new FolderData('Study 2', 'm5-3-7-case-report-forms-and-individual-patient-listings');
    xmlmap['m5/53-clin-stud-rep/537-crf-ipl/study-2/filename-1.pdf'] = new FolderData('Document/Dataset 1', 'm5-3-7-case-report-forms-and-individual-patient-listings');
    xmlmap['m5/53-clin-stud-rep/537-crf-ipl/study-2/filename-2.pdf'] = new FolderData('Document/Dataset 2', 'm5-3-7-case-report-forms-and-individual-patient-listings');
    xmlmap['m5/53-clin-stud-rep/537-crf-ipl/study-2/filename-3.pdf'] = new FolderData('Document/Dataset 3', 'm5-3-7-case-report-forms-and-individual-patient-listings');
    xmlmap['m5/53-clin-stud-rep/537-crf-ipl/study-3'] = new FolderData('Study 3', 'm5-3-7-case-report-forms-and-individual-patient-listings');
    xmlmap['m5/53-clin-stud-rep/537-crf-ipl/study-3/filename-1.pdf'] = new FolderData('Document/Dataset 1', 'm5-3-7-case-report-forms-and-individual-patient-listings');
    xmlmap['m5/53-clin-stud-rep/537-crf-ipl/study-3/filename-2.pdf'] = new FolderData('Document/Dataset 2', 'm5-3-7-case-report-forms-and-individual-patient-listings');
    xmlmap['m5/53-clin-stud-rep/537-crf-ipl/study-3/filename-3.pdf'] = new FolderData('Document/Dataset 3', 'm5-3-7-case-report-forms-and-individual-patient-listings');
    xmlmap['m5/54-lit-ref'] = new FolderData('Literature References', 'm5-4-literature-references');
    xmlmap['m5/54-lit-ref/reference-1.pdf'] = new FolderData('Reference 1', 'm5-4-literature-references');
    xmlmap['m5/54-lit-ref/reference-2.pdf'] = new FolderData('Reference 2', 'm5-4-literature-references');
    xmlmap['m5/54-lit-ref/reference-3.pdf'] = new FolderData('Reference 3', 'm5-4-literature-references');
    return xmlmap;
}

function convertToArray(xmlmap){
    var arr = [];
    for(var k in xmlmap){
        var obj = {
            RelativePath: k,
            XMLElement: xmlmap[k].element,
            ElementTitle: xmlmap[k].title,
            isFile: k.endsWith('.pdf')
        }
       arr.push(obj); 
    }
    return arr;
}

ClearCollection()
.then(function(result){
    let xmlmap = createXMLMapping();
    var xmlMappinArray = convertToArray(xmlmap);
    return InsertAll(xmlMappinArray);
})
.then(function(result){
    console.log(result.length + " xml element mappings added");
})
.catch(function(err){
    console.error(err);
});